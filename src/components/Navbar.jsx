import React from 'react';

export default function Navbar({ admin = false }) {
  return <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top" aria-label="Navigasi utama"><div className="container">
    <a className="navbar-brand" href="/">NISCALA</a>
    <div className="navbar-nav ms-auto flex-row gap-3">{admin ? <a className="nav-link" href="/">Lihat toko</a> : <><a className="nav-link" href="#menu">Menu</a><a className="btn btn-primary" href="/?page=admin">Kelola menu</a></>}</div>
  </div></nav>;
}
