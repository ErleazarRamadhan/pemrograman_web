import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList({ produk, onHapus }) {
  if (!produk.length) return <p className="alert alert-light border text-center">Belum ada menu. Tambahkan menu pertama Anda di atas.</p>;
  return <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">{produk.map((item) => <div className="col" key={item.id}><ProductCard produk={item} onHapus={onHapus} /></div>)}</div>;
}
