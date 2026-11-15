import React from 'react';

export default function Navbar({ halaman = 'katalog', onPindah = () => {} }) {
  const diKatalog = halaman === 'katalog';
  return <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top" aria-label="Navigasi utama"><div className="container">
    <a className="navbar-brand" href="/">NISCALA</a>
    <div className="navbar-nav ms-auto flex-row gap-3 align-items-center">
      {diKatalog && <><a className="nav-link" href="#menu">Menu</a><a className="nav-link" href="#ulasan">Ulasan</a><a className="btn btn-primary" href="#pesanan">Pesan</a></>}
      <button className="btn btn-outline-secondary" type="button" onClick={() => onPindah(diKatalog ? 'admin' : 'katalog')}>{diKatalog ? 'Admin' : 'Kembali ke menu'}</button>
    </div>
  </div></nav>;
}