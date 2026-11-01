import React from 'react';
import { useUlasan } from '../hooks/useUlasan.js';

export default function UlasanSection() {
  const { data, status, pesanError, cobaLagi } = useUlasan();

  return (
    <section className="py-5" id="ulasan">
      <div className="container">
        <h2 className="mb-4">Ulasan pelanggan</h2>

        {status === 'loading' && (
          <div className="text-center py-4" role="status">
            <div className="spinner-border text-primary" />
            <p className="mt-2 mb-0">Memuat ulasan...</p>
          </div>
        )}


        {status === 'error' && (
          <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
            <span>Gagal memuat ulasan. {pesanError}</span>
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={cobaLagi}>
              Coba Lagi
            </button>
          </div>
        )}

        {status === 'success' && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {data.map((ulasan) => (
              <div className="col" key={ulasan.id}>
                <article className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h6 text-capitalize">{ulasan.name}</h3>
                    <p className="small text-secondary mb-2">{ulasan.email}</p>
                    <p className="mb-0">{ulasan.body}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}