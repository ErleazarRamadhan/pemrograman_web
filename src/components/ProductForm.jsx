import React, { useState } from 'react';

const kosong = { nama: '', kategori: 'Kopi', harga: '', deskripsi: '', tersedia: true };

export default function ProductForm({ awal, onSimpan, onBatal, error }) {
  const [form, setForm] = useState(awal ? { ...kosong, ...awal } : kosong);
  const ubah = (event) => {
    const { name, value, type, checked } = event.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  async function submit(event) {
    event.preventDefault();
    const berhasil = await onSimpan({
      nama: form.nama,
      kategori: form.kategori,
      harga: Number(form.harga),
      deskripsi: form.deskripsi,
      tersedia: form.tersedia,
    });
    if (berhasil && !awal) setForm(kosong);
  }

  return <section className="py-5 bg-soft" id="tambah-produk"><div className="container"><div className="row justify-content-center"><div className="col-lg-8">
    <div className="mb-4"><h2 className="mb-1">{awal ? 'Ubah menu' : 'Tambah menu'}</h2><p className="text-secondary mb-0">{awal ? `Mengubah: ${awal.nama}` : 'Masukkan menu baru ke katalog NISCALA.'}</p></div>
    <form className="card border-0 shadow-sm" onSubmit={submit}><div className="card-body p-4">
      {error && <p className="alert alert-danger">{error}</p>}
      <div className="row g-3">
        <div className="col-md-6"><label className="form-label" htmlFor="nama">Nama menu</label><input className="form-control" id="nama" name="nama" value={form.nama} onChange={ubah} required maxLength="60" /></div>
        <div className="col-md-6"><label className="form-label" htmlFor="kategori">Kategori</label><select className="form-select" id="kategori" name="kategori" value={form.kategori} onChange={ubah}><option>Kopi</option><option>Pastry</option></select></div>
        <div className="col-md-6"><label className="form-label" htmlFor="harga">Harga (Rp)</label><input className="form-control" id="harga" name="harga" type="number" min="1000" value={form.harga} onChange={ubah} required /></div>
        <div className="col-md-6 d-flex align-items-end"><div className="form-check"><input className="form-check-input" id="tersedia" name="tersedia" type="checkbox" checked={form.tersedia} onChange={ubah} /><label className="form-check-label" htmlFor="tersedia">Tersedia di katalog</label></div></div>
        <div className="col-12"><label className="form-label" htmlFor="deskripsi">Deskripsi</label><textarea className="form-control" id="deskripsi" name="deskripsi" rows="2" value={form.deskripsi} onChange={ubah} required maxLength="180" /></div>
      </div>
      <div className="d-flex gap-2 mt-3"><button className="btn btn-primary" type="submit">{awal ? 'Simpan perubahan' : 'Tambah'}</button>{awal && <button className="btn btn-outline-secondary" type="button" onClick={onBatal}>Batal</button>}</div>
    </div></form>
  </div></div></div></section>;
}