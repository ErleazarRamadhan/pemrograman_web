import React from 'react';

export default function Navbar() {
  return <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top" aria-label="Navigasi utama"><div className="container">
    <a className="navbar-brand" href="/">NISCALA</a>
    <div className="navbar-nav ms-auto flex-row gap-3"><a className="nav-link" href="#menu">Menu</a><a className="nav-link" href="#ulasan">Ulasan</a><a className="btn btn-primary" href="#pesanan">Pesan</a></div>
  </div></nav>;
}
