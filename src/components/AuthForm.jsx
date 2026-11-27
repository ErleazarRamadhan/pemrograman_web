import React, { useState } from 'react';
import { kirimKredensial } from '../api/produk.js';

export default function AuthForm({ onLogin }) {
  const [daftar, setDaftar] = useState(false);
  const [sibuk, setSibuk] = useState(false);
  const [error, setError] = useState('');
  const [pesan, setPesan] = useState('');

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setSibuk(true);
    setError('');
    setPesan('');
    try {
      if (daftar) {
        await kirimKredensial('register', data);
        form.reset();
        setDaftar(false);
        setPesan('Akun berhasil dibuat. Silakan masuk.');
      } else {
        const { accessToken } = await kirimKredensial('login', data);
        onLogin(accessToken);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSibuk(false);
    }
  }

  return (
    <main className="container py-5">
      <h1>{daftar ? 'Daftar akun' : 'Masuk untuk mengelola menu'}</h1>
      <form onSubmit={submit} className="col-md-6">
        {error && <p role="alert" className="alert alert-danger">{error}</p>}
        {pesan && <p role="status" className="alert alert-success">{pesan}</p>}
        <label className="form-label d-block mb-3">
          Email
          <input className="form-control" name="email" type="email" autoComplete="username" maxLength={254} required />
        </label>
        <label className="form-label d-block mb-3">
          Kata sandi
          <input className="form-control" name="password" type="password" autoComplete={daftar ? 'new-password' : 'current-password'} minLength={8} maxLength={72} required />
        </label>
        <button className="btn btn-primary" type="submit" disabled={sibuk}>{daftar ? 'Daftar' : 'Masuk'}</button>
        <button className="btn btn-link" type="button" disabled={sibuk} onClick={() => {
          setDaftar(!daftar);
          setError('');
          setPesan('');
        }}>{daftar ? 'Sudah punya akun?' : 'Buat akun'}</button>
      </form>
    </main>
  );
}
