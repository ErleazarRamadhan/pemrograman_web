import React, { useState } from 'react';

const kosong = { nama: '', kategori: 'Kopi', harga: '', deskripsi: '' };

export default function ProductForm({ onTambah }) {
  const [form, setForm] = useState(kosong);
  const ubah = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  function submit(event) {
    event.preventDefault();
    onTambah({ ...form, id: crypto.randomUUID(), harga: Number(form.harga), gambar: form.kategori === 'Kopi' ? 'img/cappuccino.jpg' : 'img/croissant.jpg' });
    setForm(kosong);
  }

  return <section className="py-5 bg-soft" id="tambah-produk"><div className="container"><div className="row justify-content-center"><div className="col-lg-8">
    <div className="mb-4"><h2 className="mb-1">Tambah menu</h2><p className="text-secondary mb-0">Masukkan menu baru ke katalog NISCALA.</p></div>
    <form className="card border-0 shadow-sm" onSubmit={submit}><div className="card-body p-4"><div className="row g-3">
      <div className="col-md-6"><label className="form-label" htmlFor="nama">Nama menu</label><input className="form-control" id="nama" name="nama" value={form.nama} onChange={ubah} required maxLength="60" /></div>
      <div className="col-md-6"><label className="form-label" htmlFor="kategori">Kategori</label><select className="form-select" id="kategori" name="kategori" value={form.kategori} onChange={ubah}><option>Kopi</option><option>Pastry</option></select></div>
      <div className="col-md-6"><label className="form-label" htmlFor="harga">Harga (Rp)</label><input className="form-control" id="harga" name="harga" type="number" min="1" value={form.harga} onChange={ubah} required /></div>
      <div className="col-12"><label className="form-label" htmlFor="deskripsi">Deskripsi</label><textarea className="form-control" id="deskripsi" name="deskripsi" rows="2" value={form.deskripsi} onChange={ubah} required maxLength="180" /></div>
    </div><button className="btn btn-primary mt-3" type="submit">Tambah</button></div></form>
  </div></div></div></section>;
}
