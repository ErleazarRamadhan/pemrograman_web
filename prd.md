# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Niscala

**STATUS: FINAL (MVP Tahap 5 - Interaktif)**

| | |
|---|---|
| **Nama Produk** | Niscala |
| **Versi Dokumen** | v1.0 |
| **Disusun oleh** | Erleazar Pandita Ramadhan (Pengembang) |
| **Untuk** | Proyek Kuliah Pemrograman Web (Penilaian) |
| **Tanggal** | 18 Oktober 2026 |
| **Dokumen Terkait** | Instruksi Tugas Perkuliahan Bab 2 (HTML) s/d Bab 5 (Javascript & Jquery) |

# 1. Ringkasan Produk (Overview)

Kedai kopi dan pastry sering kali mengandalkan buku menu fisik yang menyulitkan pembaruan data secara instan dan membatasi pelanggan untuk melihat variasi produk dari jarak jauh. Tanpa sistem pencatatan pemesanan mandiri yang terpusat, pengumpulan pesanan rentan akan miskomunikasi dan tidak terorganisir dengan rapi.

Niscala dirancang sebagai solusi *frontend* antarmuka berbasis web yang memungkinkan pelanggan menelusuri katalog kopi dan pastry secara digital serta melakukan simulasi pemesanan. Pada rilis MVP saat ini, aplikasi menggunakan Bootstrap untuk tata letak yang responsif, serta memberdayakan JavaScript murni dan jQuery untuk mengelola data pesanan sementara (data *dummy*), logika pemfilteran kategori, serta animasi dan validasi antarmuka secara *client-side*.

# 2. Tujuan & Sasaran (Goals)

- Menyajikan katalog menu kopi dan pastry yang interaktif dan dapat difilter secara langsung tanpa memuat ulang halaman.
- Menjamin kelengkapan dan akurasi data pesanan sebelum diproses lebih lanjut melalui validasi formulir sisi klien.
- Memastikan antarmuka dapat diakses secara optimal melalui berbagai ukuran layar (seluler hingga desktop).
- Memenuhi spesifikasi teknis pengembangan bertahap (*semantic* HTML, CSS responsif, struktur Bootstrap, serta logika JavaScript/jQuery).

# 3. Pengguna & Peran (Users & Roles)

- **Pelanggan (Customer):** Mengakses aplikasi, menggunakan fitur filter untuk mengeksplorasi katalog, dan mengisi formulir pemesanan dengan panduan validasi dari sistem.
- **Admin (Pemilik Toko):** Mengelola data katalog produk dan status pesanan (difokuskan untuk rilis fase *backend* selanjutnya).

# 4. Ruang Lingkup (Scope)

## 4.1 Termasuk (MVP)

- Struktur minimal 3 halaman (Beranda, Katalog Data, dan Formulir Pemesanan) dengan tata letak grid dari Bootstrap.
- Penyimpanan dan manipulasi data produk *dummy* menggunakan variabel *array of object* JavaScript (mencakup elemen `id`, `nama`, `harga`, dan `jumlah`).
- Fitur interaktif JavaScript untuk menampilkan data katalog (*render*) dan memfilter tampilan daftar produk.
- Efek animasi antarmuka menggunakan jQuery (`slideToggle` untuk detail produk dan `fadeIn/fadeOut` untuk notifikasi sukses/gagal).
- Validasi formulir pemesanan menggunakan jQuery.

## 4.2 Di Luar Lingkup Awal / Fase Lanjutan

- Integrasi dengan *database* relasional sungguhan dan sistem peladen (*server-side processing*).
- Sistem otentikasi (login/register) dan gerbang pembayaran (*payment gateway*).

# 5. Asumsi & Batasan (Assumptions & Constraints)

- Seluruh data bersifat tidak permanen (berbasis memori *client-side*). Data pesanan akan hilang jika jendela peramban (*browser*) dimuat ulang.
- Desain antarmuka memprioritaskan fungsi fungsional berbasis komponen standar Bootstrap, sehingga penyesuaian gaya visual khusus (kustom CSS tebal) dijaga seminimal mungkin untuk fokus pada interaktivitas.
- Berjalan mengandalkan koneksi internet terbuka guna memuat *library* pihak ketiga dari *Content Delivery Network* (CDN).

# 6. Kebutuhan Fungsional (Functional Requirements)

## 6.1 Customer — Manajemen Katalog Interaktif

| **ID** | **Kebutuhan Fungsional** | **Prioritas** |
|---|---|---|
| **KAT-1** | Sistem me-*render* tampilan daftar produk secara dinamis berdasarkan data *array of object* JavaScript, bukan ditulis statis (manual) di dalam HTML. | **Wajib** |
| **KAT-2** | Sistem menyediakan tombol kontrol untuk memfilter produk (misalnya menampilkan hanya produk Kopi atau hanya Pastry) yang dieksekusi dengan JavaScript murni. | **Wajib** |
| **KAT-3** | Sistem menyajikan animasi luwes (menggunakan jQuery `.slideToggle()`) saat pengguna menekan tombol "Lihat Deskripsi Lengkap" pada setiap kartu produk. | **Wajib** |

## 6.2 Customer — Validasi & Formulir Pemesanan

| **ID** | **Kebutuhan Fungsional** | **Prioritas** |
|---|---|---|
| **ORD-1** | Sistem menyediakan formulir untuk menampung masukan pengguna (Nama Pemesan, Produk, Harga, Jumlah). | **Wajib** |
| **ORD-2** | Sistem (via jQuery) mencegah pengiriman formulir dan memunculkan teks peringatan warna merah jika *field* Nama kosong atau *field* Jumlah bernilai 0 atau kurang. | **Wajib** |
| **ORD-3** | Sistem menampilkan pop-up notifikasi animasi "Pesanan Berhasil Ditambahkan" (menggunakan jQuery `.fadeIn()` lalu `.fadeOut()`) jika validasi terpenuhi. | **Penting** |

# 7. Alur Pengguna Utama (Key User Flows)

## 7.1 Alur Filter dan Pemesanan dengan Validasi

1. Pelanggan masuk ke halaman Katalog; sistem otomatis melooping data JavaScript dan menampilkan seluruh menu Niscala.
2. Pelanggan mengeklik tombol "Kategori: Pastry" dan sistem langsung menyembunyikan item kopi dari tampilan.
3. Pelanggan berpindah ke halaman Formulir Pemesanan dan sengaja mengeklik "Kirim Pesanan" tanpa mengisi nama.
4. Status sistem "Validasi Gagal": jQuery menghentikan formulir, mengubah bingkai *input* menjadi merah, dan memunculkan pesan "Nama harus diisi dan Jumlah minimal 1".
5. Pelanggan melengkapi masukan dengan benar dan mengirim ulang.
6. Status sistem "Berhasil": Animasi notifikasi hijau muncul mengonfirmasi bahwa masukan telah diterima (secara *dummy*).

# 8. Model Data (High-Level)

| **Entitas** | **Field Utama** | **Keterangan** |
|---|---|---|
| **Produk_Dummy** | id, nama, kategori, harga, stok/jumlah_tersedia | Kumpulan data awal yang dibuat dalam format variabel *Array of Objects* di JavaScript. |
| **Pesanan_Dummy** | id_pesanan, nama_pemesan, produk_terpilih, jumlah_beli | Objek sementara yang dibentuk setelah validasi form jQuery berhasil disetujui. |

**Catatan:** field dalam [tanda kurung siku] merupakan bagian dari fitur usulan/Fase Lanjutan (Bab 11).

# 9. Kebutuhan Non-Fungsional (Non-Functional Requirements)

- **Responsivitas:** Struktur menggunakan *class* Bootstrap (`container`, `row`, `col-md`, `col-sm`) guna memastikan tata letak aman untuk gawai (*mobile*) dan desktop.
- **Performa Antarmuka:** Eksekusi manipulasi DOM (sembunyi/muncul elemen) dikelola tanpa membuat halaman berkedip atau *re-load* utuh (*Single Page/Client-Side approach*).

# 10. Integrasi Pihak Ketiga

| **Layanan** | **Fungsi** | **Catatan** |
|---|---|---|
| **Bootstrap 5 (CDN)** | Menyediakan *styling* instan dan *grid system*. | - |
| **jQuery (CDN)** | Mempermudah seleksi DOM, animasi UI, dan eksekusi event. | Wajib dimuat sebelum tag penutup `<body>`. |

# 11. Fitur Usulan / Fase Lanjutan

- **Integrasi Backend (PHP/Node.js).** Mengganti memori *dummy array* dengan permintaan AJAX ke server untuk penyimpanan data yang permanen.
- **Dasbor Admin Interaktif.** Halaman khusus yang menggunakan tabel *DataTables* untuk manajemen antrean pesanan masuk.

# 12. Pertanyaan Terbuka / TBD

- Belum ada pertanyaan terbuka. Seluruh komponen penugasan interaktivitas antarmuka dari HTML hingga JavaScript/jQuery telah terpetakan dan siap dieksekusi dalam struktur.

# 13. Glosarium

- **Array of Object:** Struktur data spesifik dalam bahasa pemrograman JavaScript yang memungkinkan penyimpanan daftar item dengan properti yang mendetail.
- **Client-Side:** Proses logika aplikasi web yang berjalan sepenuhnya di peramban internet (*browser*) milik pengguna, bukan pada server eksternal.
- **DOM Manipulation:** Proses pengubahan tampilan dokumen web secara langsung di latar layar, misalnya menambah atau menghapus elemen daftar produk tanpa perlu pindah ke URL (halaman) baru.
