# NISCALA

Aplikasi web katalog kopi dan pastry NISCALA. Proyek ini dibuat untuk tugas Pemrograman Web Bab 5 tentang JavaScript dan jQuery, menggunakan data produk dummy di sisi klien.

## Fitur

- Menampilkan katalog produk yang sama di halaman Beranda, Daftar Menu, dan pilihan produk pada form.
- Memfilter produk berdasarkan kategori Kopi dan Pastry.
- Membuka dan menyembunyikan deskripsi kartu produk dengan animasi jQuery `slideToggle()`.
- Memvalidasi nama pemesan dan jumlah produk sebelum form diproses.
- Menampilkan notifikasi sukses dengan animasi `fadeIn()` dan `fadeOut()` jika validasi lolos.
- Menyediakan form simulasi pesanan; take-away dilayani langsung di kasir.

## Menjalankan Aplikasi

1. Buka folder proyek ini di editor atau file explorer.
2. Buka `index.html` di browser. Live Server juga dapat digunakan.
3. Pastikan koneksi internet aktif agar Bootstrap dan jQuery dapat dimuat dari CDN.

## Halaman

- `index.html` — Beranda dan katalog produk dengan filter serta detail animasi.
- `detail.html` — Daftar menu lengkap dengan filter kategori.
- `form.html` — Form simulasi pemesanan dan ringkasan harga.

## Struktur Proyek

```text
├── index.html
├── detail.html
├── form.html
├── style.css
├── script.js
├── img/                  # Foto menu
└── docs/screenshots/     # Dokumentasi tampilan
```

Data produk disimpan dalam array `katalogProduk` di `script.js`. Foto pada katalog merujuk ke file di folder `img/`.

## Batasan

Data pesanan hanya disimulasikan di browser dan tidak disimpan ke server atau database. Integrasi pembayaran online belum tersedia.

## Dokumentasi Tugas

- Simpan screenshot kondisi sebelum dan sesudah interaksi di `docs/screenshots/`.
- Tambahkan tautan video demonstrasi interaksi di sini setelah video diunggah.
- Dokumen kebutuhan: `prd.md`.
- Panduan visual: `stylelguide.md`.
