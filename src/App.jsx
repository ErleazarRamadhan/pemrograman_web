import React, { useState } from 'react';
import { produkAwal } from './data/produk.js';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import ProductForm from './components/ProductForm.jsx';
import MenuCatalog from './components/MenuCatalog.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [produk, setProduk] = useState(produkAwal);

 return <><Navbar /><main><Dashboard jumlahProduk={produk.length} /><ProductForm onTambah={(item) => setProduk((daftar) => [item, ...daftar])} />
  <MenuCatalog produk={produk} onHapus={(id) => setProduk((daftar) => daftar.filter((item) => item.id !== id))} />
 </main><Footer /></>;
}
