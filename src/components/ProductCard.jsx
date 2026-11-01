import React, { useState } from 'react';
import { rupiah } from '../data/produk.js';

export default function ProductCard({ produk, onTambahKeranjang }) {
  const [detailTerbuka, setDetailTerbuka] = useState(false);
  return <article className="card product-card h-100 border-0 shadow-sm">
    <div className="ratio ratio-4x3"><img src={produk.gambar} className="card-img-top" alt={produk.nama} /></div>
    <div className="card-body d-flex flex-column"><span className={`badge ${produk.kategori === 'Kopi' ? 'text-bg-primary' : 'text-bg-warning'} align-self-start mb-2`}>{produk.kategori}</span>
      <h3 className="h5">{produk.nama}</h3><button className="btn btn-sm btn-outline-primary align-self-start mb-2" type="button" aria-expanded={detailTerbuka} onClick={() => setDetailTerbuka(!detailTerbuka)}>{detailTerbuka ? 'Tutup detail' : 'Lihat detail'}</button>
      {detailTerbuka && <p className="small text-secondary">{produk.deskripsi}</p>}<span className="fw-bold text-primary mt-auto">Rp {rupiah(produk.harga)}</span>
      <button className="btn btn-outline-primary mt-3" type="button" onClick={() => onTambahKeranjang(produk)}>Tambah ke pesanan</button>
    </div>
  </article>;
}
