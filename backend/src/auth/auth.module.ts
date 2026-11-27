import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [JwtModule.registerAsync({
    useFactory: () => {
      const secret = process.env.JWT_SECRET;
      if (!secret || Buffer.byteLength(secret) < 32) {
        throw new Error('JWT_SECRET harus minimal 32 byte.');
      }
      return {
        secret,
        signOptions: { algorithm: 'HS256', expiresIn: '1h' },
        verifyOptions: { algorithms: ['HS256'] },
      };
    },
  })],
  controllers: [AuthController],
  providers: [PrismaService],
  exports: [JwtModule],
})
export class AuthModule {}
