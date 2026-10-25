# NISCALA

Aplikasi katalog kopi dan pastry NISCALA yang dibangun dengan React dan Vite. Katalog menggunakan data lokal sebagai fondasi frontend yang akan dikembangkan lagi hingga Pekan 14 dan dihubungkan ke backend/API pada Pekan 11.

## Menjalankan aplikasi

```sh
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite (default `http://localhost:5173`).

## Fitur

- Menampilkan katalog kopi dan pastry NISCALA dengan data menu yang relevan.
- Memfilter menu menurut kategori.
- Menambahkan menu melalui controlled form dan menghapus menu dari state React.
- Membuka detail setiap menu serta melihat pesan kosong ketika daftar tidak berisi data.
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

Perubahan data saat ini hanya disimpan di state browser dan akan di-reset saat halaman dimuat ulang. Integrasi backend/API direncanakan untuk tahap berikutnya.

## Bukti tugas

Simpan screenshot saat server Vite berjalan dan screenshot semua tampilan/tahapan di `docs/screenshots/` sebelum pengumpulan. Repository ini telah memiliki riwayat commit dari tahap sebelumnya; commit React menjadi commit lanjutan.
