-- CreateEnum
CREATE TYPE "KategoriProduk" AS ENUM ('Kopi', 'Pastry');

-- CreateTable
CREATE TABLE "Produk" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(60) NOT NULL,
    "kategori" "KategoriProduk" NOT NULL,
    "harga" INTEGER NOT NULL,
    "deskripsi" VARCHAR(180) NOT NULL,
    "tersedia" BOOLEAN NOT NULL DEFAULT true,
    "gambar" TEXT NOT NULL,
    "dibuatPada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("id")
);
