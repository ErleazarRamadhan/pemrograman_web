import React from 'react';

const kategori = ['Semua', 'Kopi', 'Pastry'];

export default function FilterBar({ aktif, onPilih }) {
  return <div className="d-flex flex-wrap gap-2 mb-4" aria-label="Filter kategori katalog">{kategori.map((item) => <button key={item} type="button" className={`btn ${aktif === item ? 'btn-primary' : 'btn-outline-primary'}`} aria-pressed={aktif === item} onClick={() => onPilih(item)}>{item}</button>)}</div>;
}
