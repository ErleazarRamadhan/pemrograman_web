const BASE = 'http://localhost:3000/produk';

async function request(path = '', options = {}) {
  let res;
  try {
    res = await fetch(`${BASE}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
  } catch {
    throw new Error('Tidak dapat terhubung ke server. Pastikan backend berjalan.');
  }
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const pesan = Array.isArray(data?.message) ? data.message.join(', ') : data?.message;
    throw new Error(pesan || `Permintaan gagal (${res.status})`);
  }
  return data;
}

export const getProduk = () => request();
export const tambahProduk = (data) => request('', { method: 'POST', body: JSON.stringify(data) });
export const ubahProduk = (id, data) => request(`/${id}`, { method: 'PATCH', body: JSON.stringify(data) });
export const hapusProduk = (id) => request(`/${id}`, { method: 'DELETE' });