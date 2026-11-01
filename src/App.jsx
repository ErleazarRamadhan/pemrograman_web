import React, { useState } from 'react';
import { produkAwal } from './data/produk.js';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import ProductForm from './components/ProductForm.jsx';
import MenuCatalog from './components/MenuCatalog.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [produk, setProduk] = useState(produkAwal);

  function tambahProduk(item) {
    setProduk((daftar) => [item, ...daftar]);
  }

  function hapusProduk(id) {
    setProduk((daftar) => daftar.filter((item) => item.id !== id));
  }

  return (
    <>
      <Navbar />
      <main>
        <Dashboard jumlahProduk={produk.length} />
        <ProductForm onTambah={tambahProduk} />
        <MenuCatalog produk={produk} onHapus={hapusProduk} />
      </main>
      <Footer />
    </>
  );
}
