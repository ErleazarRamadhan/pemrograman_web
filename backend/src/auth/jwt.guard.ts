import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { authorization } = context.switchToHttp().getRequest<Request>().headers;
    const token = authorization?.match(/^Bearer (\S+)$/i)?.[1];
    if (!token) {
      throw new UnauthorizedException('Token Bearer diperlukan.');
    }
    try {
      const payload = await this.jwt.verifyAsync<{ sub: number }>(token);
      if (Number.isSafeInteger(payload.sub) && payload.sub > 0) return true;
    } catch {
      throw new UnauthorizedException('Token tidak valid atau kedaluwarsa.');
    }
    throw new UnauthorizedException('Token tidak valid.');
  }
}
