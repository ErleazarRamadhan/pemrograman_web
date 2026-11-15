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