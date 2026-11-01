import React, { useState } from 'react';
import { produkAwal } from './data/produk.js';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import MenuCatalog from './components/MenuCatalog.jsx';
import Footer from './components/Footer.jsx';
import UlasanSection from './components/UlasanSection.jsx';
import { rupiah } from './data/produk.js';

export default function App() {
  const [keranjang, setKeranjang] = useState([]);
  const [pesananTerkirim, setPesananTerkirim] = useState(false);
  const meja = new URLSearchParams(window.location.search).get('meja');
  const total = keranjang.reduce((jumlah, item) => jumlah + item.harga * item.jumlah, 0);

  function tambahKeKeranjang(produk) {
    setPesananTerkirim(false);
    setKeranjang((daftar) => {
      const ada = daftar.find((item) => item.id === produk.id);
      return ada
        ? daftar.map((item) => item.id === produk.id ? { ...item, jumlah: item.jumlah + 1 } : item)
        : [...daftar, { ...produk, jumlah: 1 }];
    });
  }

  function kirimPesanan() {
    if (!meja || !keranjang.length) return;
    setKeranjang([]);
    setPesananTerkirim(true);
  }

  return (
    <>
      <Navbar />
      <main>
        <Dashboard jumlahProduk={produkAwal.length} />
        <MenuCatalog produk={produkAwal} onTambahKeranjang={tambahKeKeranjang} />
        {(meja || keranjang.length > 0 || pesananTerkirim) && <section className="py-5 bg-soft" id="pesanan">
          <div className="container">
            <h2 className="mb-2">Pesanan Anda</h2>
            {meja ? <p className="text-secondary">Pesanan untuk meja {meja}</p> : <p className="text-secondary">Untuk pesan dan menikmati di tempat, pindai QR code yang tersedia di meja. Pesanan take away dapat dilakukan langsung di kasir.</p>}
            {pesananTerkirim && <p className="alert alert-success">Pesanan dicatat. Pembayaran akan tersedia pada tahap berikutnya.</p>}
            {keranjang.length ? <>
              <ul className="list-group mb-3">{keranjang.map((item) => <li className="list-group-item d-flex justify-content-between" key={item.id}><span>{item.nama} × {item.jumlah}</span><span>Rp {rupiah(item.harga * item.jumlah)}</span></li>)}</ul>
              <p className="fw-bold">Total: Rp {rupiah(total)}</p>
              <button className="btn btn-primary" type="button" disabled={!meja} onClick={kirimPesanan}>Kirim pesanan</button>
            </> : <p className="text-secondary mb-0">Belum ada menu dipilih.</p>}
          </div>
        </section>}
        <UlasanSection />
      </main>
      <Footer />
    </>
  );
}
