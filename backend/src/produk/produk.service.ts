import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { Produk } from './entities/produk.entity';

@Injectable()
export class ProdukService {
  private produk: Produk[] = [
    { id: 1, nama: 'Cappuccino', kategori: 'Kopi', harga: 28000, gambar: 'img/cappuccino.jpg', deskripsi: 'Espresso dengan steamed milk dan busa susu yang lembut.', tersedia: true, dibuatPada: new Date() },
    { id: 2, nama: 'Niscala Latte', kategori: 'Kopi', harga: 30000, gambar: 'img/latte.jpg', deskripsi: 'Perpaduan espresso dan susu hangat dengan rasa seimbang.', tersedia: true, dibuatPada: new Date() },
    { id: 3, nama: 'Kopi Gula Aren', kategori: 'Kopi', harga: 32000, gambar: 'img/kopi-susu-gula-aren.jpg', deskripsi: 'Kopi susu dingin dengan manis alami gula aren.', tersedia: true, dibuatPada: new Date() },
    { id: 4, nama: 'Croissant Cokelat', kategori: 'Pastry', harga: 25000, gambar: 'img/croissant.jpg', deskripsi: 'Croissant renyah berlapis dengan isian cokelat.', tersedia: true, dibuatPada: new Date() },
    { id: 5, nama: 'Tiramisu', kategori: 'Pastry', harga: 32000, gambar: 'img/tiramisu.jpg', deskripsi: 'Pastry lembut dengan krim mascarpone dan taburan kakao.', tersedia: true, dibuatPada: new Date() },
    { id: 6, nama: 'Pain au Raisin', kategori: 'Pastry', harga: 27000, gambar: 'img/Pain_aux_raisins.jpg', deskripsi: 'Pastry berlapis dengan custard lembut dan kismis.', tersedia: true, dibuatPada: new Date() },
  ];
  private nextId = 7;

  private namaSudahAda(nama: string, kecualiId?: number) {
    return this.produk.some(
      (p) => p.nama.toLowerCase() === nama.toLowerCase() && p.id !== kecualiId,
    );
  }

  create(dto: CreateProdukDto): Produk {
    if (this.namaSudahAda(dto.nama)) {
      throw new ConflictException(`Menu "${dto.nama}" sudah ada`);
    }
    const baru: Produk = {
      id: this.nextId++,
      nama: dto.nama,
      kategori: dto.kategori,
      harga: dto.harga,
      deskripsi: dto.deskripsi,
      tersedia: dto.tersedia ?? true,
      gambar: dto.gambar ?? (dto.kategori === 'Kopi' ? 'img/cappuccino.jpg' : 'img/croissant.jpg'),
      dibuatPada: new Date(),
    };
    this.produk.push(baru);
    return baru;
  }

  findAll(): Produk[] {
    return this.produk;
  }

  findOne(id: number): Produk {
    const item = this.produk.find((p) => p.id === id);
    if (!item) throw new NotFoundException(`Menu dengan id ${id} tidak ditemukan`);
    return item;
  }

  update(id: number, dto: UpdateProdukDto): Produk {
    const item = this.findOne(id);
    if (dto.nama && this.namaSudahAda(dto.nama, id)) {
      throw new ConflictException(`Menu "${dto.nama}" sudah ada`);
    }
    Object.assign(item, dto);
    return item;
  }

  remove(id: number): { message: string } {
    const item = this.findOne(id);
    this.produk = this.produk.filter((p) => p.id !== id);
    return { message: `Menu "${item.nama}" berhasil dihapus` };
  }
}