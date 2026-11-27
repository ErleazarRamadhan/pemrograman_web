import {
  BadRequestException, Body, ConflictException, Controller, HttpCode, Post,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { compare, hash } from 'bcryptjs';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { PrismaService } from '../prisma/prisma.service';

class CredentialsDto {
  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password!: string;
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  @Post('register')
  async register(@Body() { email, password }: CredentialsDto) {
    this.validatePasswordBytes(password);
    const passwordHash = await hash(password, 12);
    try {
      return await this.prisma.user.create({
        data: { email: email.toLowerCase(), passwordHash },
        select: { id: true, email: true },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('Email sudah terdaftar.');
      }
      throw error;
    }
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() { email, password }: CredentialsDto) {
    this.validatePasswordBytes(password);
    const user = await this.prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (!user || !(await compare(password, user.passwordHash))) {
      throw new UnauthorizedException('Email atau kata sandi salah.');
    }
    return { accessToken: await this.jwt.signAsync({ sub: user.id }) };
  }

  private validatePasswordBytes(password: string) {
    if (Buffer.byteLength(password) > 72) {
      throw new BadRequestException('Kata sandi maksimal 72 byte.');
    }
  }
}
