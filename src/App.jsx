import React, { useEffect, useState } from 'react';
import { produkAwal } from './data/produk.js';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import MenuCatalog from './components/MenuCatalog.jsx';
import Footer from './components/Footer.jsx';
import UlasanSection from './components/UlasanSection.jsx';
import AdminPage from './components/AdminPage.jsx';

function bacaProduk() {
  try {
    const tersimpan = JSON.parse(localStorage.getItem('niscala-produk'));
    return Array.isArray(tersimpan) ? tersimpan : produkAwal;
  } catch {
    return produkAwal;
  }
}

export default function App() {
  const [produk, setProduk] = useState(bacaProduk);
  const halamanAdmin = new URLSearchParams(window.location.search).get('page') === 'admin';

  useEffect(() => {
    localStorage.setItem('niscala-produk', JSON.stringify(produk));
  }, [produk]);

  function tambahProduk(item) {
    setProduk((daftar) => [item, ...daftar]);
  }

  function hapusProduk(id) {
    setProduk((daftar) => daftar.filter((item) => item.id !== id));
  }

  return (
    <>
      <Navbar admin={halamanAdmin} />
      {halamanAdmin ? (
        <AdminPage produk={produk} onTambah={tambahProduk} onHapus={hapusProduk} />
      ) : (
        <>
          <main>
            <Dashboard jumlahProduk={produk.length} />
            <MenuCatalog produk={produk} />
            <UlasanSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
