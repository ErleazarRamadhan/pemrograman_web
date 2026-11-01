import React, { useState } from 'react';
import FilterBar from './FilterBar.jsx';
import ProductList from './ProductList.jsx';

export default function MenuCatalog({ produk, onTambahKeranjang }) {
  const [filter, setFilter] = useState('Semua');
  const produkTerlihat = filter === 'Semua'
    ? produk
    : produk.filter((item) => item.kategori === filter);

  return (
    <section className="py-5" id="menu">
      <div className="container">
        <div className="mb-4">
          <h2 className="mb-1">Katalog menu</h2>
          <p className="text-secondary mb-0">Menu kopi dan pastry NISCALA, diracik dan dibuat setiap hari.</p>
        </div>
        <FilterBar aktif={filter} onPilih={setFilter} />
        <ProductList produk={produkTerlihat} onTambahKeranjang={onTambahKeranjang} />
      </div>
    </section>
  );
}
