import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList({ produk, onTambahKeranjang }) {
  if (!produk.length) return <p className="alert alert-light border text-center">Menu belum tersedia.</p>;
  return <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">{produk.map((item) => <div className="col" key={item.id}><ProductCard produk={item} onTambahKeranjang={onTambahKeranjang} /></div>)}</div>;
}
