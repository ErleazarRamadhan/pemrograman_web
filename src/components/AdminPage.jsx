import React, { useState } from 'react';
import ProductForm from './ProductForm.jsx';
import { rupiah } from '../data/produk.js';

export default function AdminPage({ produk, onTambah, onUbah, onHapus }) {
  const [diedit, setDiedit] = useState(null);
  const [error, setError] = useState('');

  async function simpan(data) {
    setError('');
    try {
      if (diedit) await onUbah(diedit.id, data);
      else await onTambah(data);
      setDiedit(null);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  }

  async function hapus(item) {
    if (!window.confirm(`Hapus menu "${item.nama}"?`)) return;
    setError('');
    try {
      await onHapus(item.id);
      if (diedit?.id === item.id) setDiedit(null);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main>
      <ProductForm key={diedit ? diedit.id : 'baru'} awal={diedit} onSimpan={simpan} onBatal={() => { setDiedit(null); setError(''); }} error={error} />
      <section className="py-5">
        <div className="container">
          <h2 className="h3 mb-3">Kelola katalog</h2>
          <p className="text-secondary">Tambah, ubah, atau hapus menu di katalog NISCALA.</p>
          <h3 className="h5 mb-3">Menu saat ini</h3>
          <div className="list-group">
            {produk.map((item) => (
              <div className="list-group-item d-flex justify-content-between align-items-center gap-3" key={item.id}>
                <span><strong>{item.nama}</strong><span className="text-secondary"> · {item.kategori} · Rp {rupiah(item.harga)}{!item.tersedia && ' · Tidak tersedia'}</span></span>
                <span className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary" type="button" onClick={() => { setDiedit(item); setError(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Ubah</button>
                  <button className="btn btn-sm btn-outline-danger" type="button" onClick={() => hapus(item)}>Hapus</button>
                </span>
              </div>
            ))}
            {!produk.length && <p className="text-secondary">Belum ada menu.</p>}
          </div>
        </div>
      </section>
    </main>
  );
}