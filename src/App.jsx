import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import MenuCatalog from './components/MenuCatalog.jsx';
import Footer from './components/Footer.jsx';
import UlasanSection from './components/UlasanSection.jsx';
import AdminPage from './components/AdminPage.jsx';
import { rupiah } from './data/produk.js';
import { getProduk, tambahProduk, ubahProduk, hapusProduk } from './api/produk.js';

export default function App() {
  const [produk, setProduk] = useState([]);
  const [status, setStatus] = useState('loading');
  const [pesanError, setPesanError] = useState('');
  const [halaman, setHalaman] = useState('katalog');
  const [keranjang, setKeranjang] = useState([]);
  const [pesananTerkirim, setPesananTerkirim] = useState(false);
  const meja = new URLSearchParams(window.location.search).get('meja');
  const total = keranjang.reduce((jumlah, item) => jumlah + item.harga * item.jumlah, 0);

  async function muatProduk() {
    setStatus('loading');
    try {
      setProduk(await getProduk());
      setStatus('success');
    } catch (err) {
      setPesanError(err.message);
      setStatus('error');
    }
  }

  useEffect(() => { muatProduk(); }, []);

  async function handleTambah(data) {
    const baru = await tambahProduk(data);
    setProduk((daftar) => [...daftar, baru]);
  }

  async function handleUbah(id, data) {
    const baru = await ubahProduk(id, data);
    setProduk((daftar) => daftar.map((item) => item.id === id ? baru : item));
    setKeranjang((daftar) => daftar.map((item) => item.id === id ? { ...baru, jumlah: item.jumlah } : item));
  }

  async function handleHapus(id) {
    await hapusProduk(id);
    setProduk((daftar) => daftar.filter((item) => item.id !== id));
    setKeranjang((daftar) => daftar.filter((item) => item.id !== id));
  }

  function tambahKeKeranjang(item) {
    setPesananTerkirim(false);
    setKeranjang((daftar) => {
      const ada = daftar.find((x) => x.id === item.id);
      return ada
        ? daftar.map((x) => x.id === item.id ? { ...x, jumlah: x.jumlah + 1 } : x)
        : [...daftar, { ...item, jumlah: 1 }];
    });
  }

  function kirimPesanan() {
    if (!meja || !keranjang.length) return;
    setKeranjang([]);
    setPesananTerkirim(true);
  }

  if (halaman === 'admin') {
    return (
      <>
        <Navbar halaman={halaman} onPindah={setHalaman} />
        {status === 'error'
          ? <div className="container py-5"><p className="alert alert-danger">{pesanError}</p><button className="btn btn-primary" type="button" onClick={muatProduk}>Coba lagi</button></div>
          : <AdminPage produk={produk} onTambah={handleTambah} onUbah={handleUbah} onHapus={handleHapus} />}
        <Footer />
      </>
    );
  }

  const produkTersedia = produk.filter((item) => item.tersedia);

  return (
    <>
      <Navbar halaman={halaman} onPindah={setHalaman} />
      <main>
        <Dashboard jumlahProduk={produkTersedia.length} />
        {status === 'loading' && <section className="py-5" id="menu"><div className="container"><p className="text-secondary">Memuat menu...</p></div></section>}
        {status === 'error' && <section className="py-5" id="menu"><div className="container"><p className="alert alert-danger">{pesanError}</p><button className="btn btn-primary" type="button" onClick={muatProduk}>Coba lagi</button></div></section>}
        {status === 'success' && <MenuCatalog produk={produkTersedia} onTambahKeranjang={tambahKeKeranjang} />}
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