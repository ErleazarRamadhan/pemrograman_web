import React, { useState } from 'react';
import { produkAwal } from './data/produk.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Summary from './components/Summary.jsx';
import ProductForm from './components/ProductForm.jsx';
import FilterBar from './components/FilterBar.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';
import UlasanSection from './components/UlasanSection.jsx';

export default function App() {
  const [produk, setProduk] = useState(produkAwal);
  const [filter, setFilter] = useState('Semua');
  const produkTerlihat = filter === 'Semua' ? produk : produk.filter((item) => item.kategori === filter);

  return <><Navbar /><main><Hero /><Summary jumlahProduk={produk.length} /><ProductForm onTambah={(item) => setProduk((daftar) => [item, ...daftar])} />
    <section className="py-5" id="menu"><div className="container"><div className="mb-4"><h2 className="mb-1">Katalog menu</h2><p className="text-secondary mb-0">Menu kopi dan pastry NISCALA, diracik dan dibuat setiap hari.</p></div>
      <FilterBar aktif={filter} onPilih={setFilter} /><ProductList produk={produkTerlihat} onHapus={(id) => setProduk((daftar) => daftar.filter((item) => item.id !== id))} />
    </div></section><UlasanSection /></main><Footer /></>;
}
