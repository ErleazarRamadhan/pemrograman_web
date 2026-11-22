import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProdukService } from './produk.service';
import { ProdukController } from './produk.controller';

@Module({
  controllers: [ProdukController],
  providers: [PrismaService, ProdukService],
})
export class ProdukModule {}
