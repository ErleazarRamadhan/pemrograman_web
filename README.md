# NISCALA

Aplikasi katalog dan pemesanan coffee shop NISCALA. Frontend React menampilkan menu kopi dan pastry dari REST API NestJS. Pada Bab 10, pengelolaan menu melalui halaman Admin menggunakan Prisma ORM dan PostgreSQL.

## Menjalankan aplikasi

1. Jalankan PostgreSQL lokal. Di pgAdmin, buat login role `niscala_app` dengan password dan aktifkan **Can login?** serta **Create databases?**. Buat database `niscala` dengan owner `niscala_app`. Prisma Migrate memakai hak membuat database untuk basis data sementara saat menjalankan `migrate dev`.
2. Dari folder utama proyek, buat `backend/.env` dan isi konfigurasi berikut dengan password lokal Anda. Gunakan percent-encoding untuk karakter khusus pada password, misalnya `@` menjadi `%40`. Git mengabaikan file ini.

   ```dotenv
   DATABASE_URL="postgresql://niscala_app:PASSWORD_ANDA@127.0.0.1:5432/niscala?schema=public"
   ```

3. Jalankan backend dari terminal pertama. Migrasi membuat tabel `Produk` dan memasukkan enam menu awal.

   ```sh
   cd backend
   npm ci
   npx prisma migrate dev
   npm run start:dev
   ```

4. Jalankan frontend dari folder utama proyek di terminal kedua.

   ```sh
   npm ci
   npm run dev
   ```

Buka `http://localhost:5173` untuk katalog atau klik **Admin** untuk mengelola menu. REST API berjalan di `http://localhost:3000/produk`.

## REST API Produk

| Metode | Endpoint | Operasi |
| --- | --- | --- |
| GET | `/produk` | Tampilkan semua produk |
| GET | `/produk/:id` | Tampilkan satu produk |
| POST | `/produk` | Tambahkan produk |
| PATCH | `/produk/:id` | Ubah produk |
| DELETE | `/produk/:id` | Hapus produk |

Contoh permintaan ada di [produk.http](backend/produk.http). Untuk menguji persistensi, buat produk, catat ID pada respons, mulai ulang backend, lalu ambil produk dengan `GET /produk/:id`. Gunakan ID dari respons tersebut juga untuk mencoba PATCH dan DELETE.

## Fitur

- Menampilkan katalog kopi dan pastry NISCALA dengan data menu yang relevan.
- Memfilter menu menurut kategori.
- Melihat detail menu dan menambah item ke ringkasan pesanan.
- Mengaitkan pesanan dengan nomor meja melalui URL QR, misalnya `/?meja=5`.
- Menampilkan ulasan pelanggan secara asinkron dari JSONPlaceholder dengan status loading, sukses, error, dan tombol coba lagi.
- Mengarahkan pesanan take away ke kasir.
- Tampilan responsif yang melanjutkan identitas visual project sebelumnya.

## Struktur

```text
src/
├── components/  # Komponen UI React
├── data/        # Data awal menu
├── App.jsx      # State dan komposisi aplikasi
└── main.jsx     # Entry point React
img/             # Foto menu
```

Data menu tersimpan di PostgreSQL. Ringkasan pesanan disimpan sementara di browser.

## Bukti tugas

### Bab 10 — PostgreSQL dan Prisma

| Bukti | Screenshot |
| --- | --- |
| Database `niscala` dan role `niscala_app` di pgAdmin | [Setup PostgreSQL](docs/screenshots/bab10-postgresql.png) |
| Model `Produk`, status migrasi, dan pembacaan tabel | [Schema dan migrasi](docs/screenshots/bab10-schema-migrasi.png) |
| Provider dan registrasinya di modul Produk | [PrismaService](docs/screenshots/bab10-prisma-service.png) |
| CRUD HTTP dan data yang tetap ada setelah backend dimulai ulang | [CRUD dan persistensi](docs/screenshots/bab10-crud-persistensi.png) |
| Katalog desktop (1440 × 1050) | [Desktop](docs/screenshots/bab10-desktop.png) |
| Katalog mobile (390 × 844) | [Mobile](docs/screenshots/bab10-mobile.png) |

### Konsumsi API

Aplikasi mengambil maksimal enam ulasan dari endpoint `https://jsonplaceholder.typicode.com/comments?_limit=6`. JSONPlaceholder dipilih sebagai mock API gratis untuk menampilkan contoh ulasan pelanggan pada website coffee shop tanpa memerlukan API key.

Fungsi `ambilUlasan()` pada `src/hooks/useUlasan.js` mengambil data menggunakan `fetch()`, lalu mengatur status `loading`, `success`, atau `error`. Komponen `src/components/UlasanSection.jsx` menampilkan spinner saat loading, daftar kartu ulasan saat berhasil, serta pesan gagal dan tombol **Coba Lagi** saat terjadi error.

### Screenshot

Simpan tangkapan layar berikut di `docs/screenshots/`:

- `ulasan-loading.png` — spinner dan teks “Memuat ulasan...”.
- `ulasan-success.png` — kartu ulasan yang berhasil dimuat.
- `ulasan-error.png` — pesan gagal dan tombol “Coba Lagi”.

### Repository

https://github.com/ErleazarRamadhan/pemrograman_web
