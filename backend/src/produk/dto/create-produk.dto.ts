import {
  IsBoolean, IsIn, IsInt, IsOptional, IsString, MaxLength, Min, MinLength,
} from 'class-validator';

export class CreateProdukDto {
  @IsString()
  @MinLength(3)
  @MaxLength(60)
  nama: string;

  @IsIn(['Kopi', 'Pastry'])
  kategori: 'Kopi' | 'Pastry';

  @IsInt()
  @Min(1000)
  harga: number;

  @IsString()
  @MaxLength(180)
  deskripsi: string;

  @IsOptional()
  @IsBoolean()
  tersedia?: boolean;

  @IsOptional()
  @IsString()
  gambar?: string;
}