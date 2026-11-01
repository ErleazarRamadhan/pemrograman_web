# NISCALA

Aplikasi informasi coffee shop dan pemesanan NISCALA yang dibangun dengan React dan Vite. Pengunjung dapat melihat menu, memilih pesanan untuk makan di tempat melalui QR code meja, dan melihat ulasan pelanggan. Pembayaran online belum tersedia.

## Menjalankan aplikasi

```sh
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite (default `http://localhost:5173`).

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

Menu saat ini berasal dari data lokal. Pesanan hanya dicatat sementara di browser dan alur pembayaran akan ditambahkan pada tahap berikutnya.

## Bukti tugas

Simpan screenshot saat server Vite berjalan dan screenshot semua tampilan/tahapan di `docs/screenshots/` sebelum pengumpulan. Repository ini telah memiliki riwayat commit dari tahap sebelumnya; commit React menjadi commit lanjutan.
