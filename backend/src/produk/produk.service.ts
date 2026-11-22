import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { Produk } from './entities/produk.entity';

@Injectable()
export class ProdukService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProdukDto): Promise<Produk> {
    try {
      return await this.prisma.produk.create({
        data: {
          nama: dto.nama,
          kategori: dto.kategori,
          harga: dto.harga,
          deskripsi: dto.deskripsi,
          tersedia: dto.tersedia ?? true,
          gambar: dto.gambar ?? (dto.kategori === 'Kopi' ? 'img/cappuccino.jpg' : 'img/croissant.jpg'),
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException(`Menu "${dto.nama}" sudah ada`);
      }
      throw error;
    }
  }

  findAll(): Promise<Produk[]> {
    return this.prisma.produk.findMany({ orderBy: { id: 'asc' } });
  }

  async findOne(id: number): Promise<Produk> {
    const item = await this.prisma.produk.findUnique({ where: { id } });
    if (!item) throw new NotFoundException(`Menu dengan id ${id} tidak ditemukan`);
    return item;
  }

  async update(id: number, dto: UpdateProdukDto): Promise<Produk> {
    try {
      return await this.prisma.produk.update({
        where: { id },
        data: {
          nama: dto.nama ?? undefined,
          kategori: dto.kategori ?? undefined,
          harga: dto.harga ?? undefined,
          deskripsi: dto.deskripsi ?? undefined,
          tersedia: dto.tersedia ?? undefined,
          gambar: dto.gambar ?? undefined,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') throw new NotFoundException(`Menu dengan id ${id} tidak ditemukan`);
        if (error.code === 'P2002') throw new ConflictException(`Menu "${dto.nama}" sudah ada`);
      }
      throw error;
    }
  }

  async remove(id: number): Promise<{ message: string }> {
    try {
      const item = await this.prisma.produk.delete({ where: { id } });
      return { message: `Menu "${item.nama}" berhasil dihapus` };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException(`Menu dengan id ${id} tidak ditemukan`);
      }
      throw error;
    }
  }
}
