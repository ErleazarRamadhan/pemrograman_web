import React from 'react';

export default function Hero() {
  return <section className="py-5" id="beranda"><div className="container"><div className="row align-items-center g-4">
    <div className="col-lg-6"><p className="text-warning fw-semibold mb-2">Kedai kopi dan pastry rumahan sejak 2020</p><h1 className="display-5 fw-bold">Kopi hangat, pastry segar, ritme hari yang lebih tenang.</h1><p className="lead text-secondary">NISCALA menyajikan kopi pilihan dan pastry fresh setiap hari untuk teman belajar, kerja, atau rehat sore.</p><a className="btn btn-primary btn-lg" href="#menu">Jelajahi menu</a></div>
    <div className="col-lg-6"><img className="hero-img img-fluid rounded-4 shadow w-100" src="img/cappuccino.jpg" alt="Secangkir cappuccino dengan busa susu" /></div>
  </div></div></section>;
}
