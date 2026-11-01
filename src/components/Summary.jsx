import React from 'react';

export default function Summary({ jumlahProduk }) {
  return <section className="pb-5"><div className="container"><div className="row g-3 text-center">
    <div className="col-6 col-lg-3"><div className="card h-100 border-0 shadow-sm"><div className="card-body"><p className="display-6 fw-bold text-primary mb-0">{jumlahProduk}</p><p className="small text-secondary mb-0">Menu tersedia</p></div></div></div>
    <div className="col-6 col-lg-3"><div className="card h-100 border-0 shadow-sm"><div className="card-body"><p className="display-6 fw-bold text-primary mb-0">08.00–22.00</p><p className="small text-secondary mb-0">Jam buka setiap hari</p></div></div></div>
    <div className="col-6 col-lg-3"><div className="card h-100 border-0 shadow-sm"><div className="card-body"><p className="display-6 fw-bold text-primary mb-0">2020</p><p className="small text-secondary mb-0">Berdiri sejak</p></div></div></div>
  </div></div></section>;
}
