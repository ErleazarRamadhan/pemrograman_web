export class Produk {
  id: number;
  nama: string;
  kategori: 'Kopi' | 'Pastry';
  harga: number;
  deskripsi: string;
  tersedia: boolean;
  gambar: string;
  dibuatPada: Date;
}