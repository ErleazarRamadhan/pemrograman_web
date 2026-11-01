import React from 'react';
import ProductForm from './ProductForm.jsx';
import { rupiah } from '../data/produk.js';

export default function AdminPage({ produk, onTambah, onHapus }) {
  return (
    <main>
      <ProductForm onTambah={onTambah} />
      <section className="py-5">
        <div className="container">
          <h2 className="h3 mb-3">Kelola katalog</h2>
          <p className="text-secondary">Tambah atau hapus menu di katalog NISCALA.</p>
          <h3 className="h5 mb-3">Menu saat ini</h3>
          <div className="list-group">
            {produk.map((item) => (
              <div className="list-group-item d-flex justify-content-between align-items-center gap-3" key={item.id}>
                <span><strong>{item.nama}</strong><span className="text-secondary"> · {item.kategori} · Rp {rupiah(item.harga)}</span></span>
                <button className="btn btn-sm btn-outline-danger" type="button" onClick={() => onHapus(item.id)}>Hapus</button>
              </div>
            ))}
            {!produk.length && <p className="text-secondary">Belum ada menu.</p>}
          </div>
        </div>
      </section>
    </main>
  );
}
