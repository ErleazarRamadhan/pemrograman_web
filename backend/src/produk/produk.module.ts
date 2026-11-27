import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaService } from '../prisma/prisma.service';
import { ProdukService } from './produk.service';
import { ProdukController } from './produk.controller';

@Module({
  imports: [AuthModule],
  controllers: [ProdukController],
  providers: [PrismaService, ProdukService],
})
export class ProdukModule {}
