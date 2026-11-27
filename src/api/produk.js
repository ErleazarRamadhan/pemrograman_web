const BASE = 'http://localhost:3000';

async function request(path, options = {}, token) {
  let res;
  try {
    res = await fetch(`${BASE}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
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

export const getProduk = () => request('/produk');
export const tambahProduk = (data, token) => request('/produk', { method: 'POST', body: JSON.stringify(data) }, token);
export const ubahProduk = (id, data, token) => request(`/produk/${id}`, { method: 'PATCH', body: JSON.stringify(data) }, token);
export const hapusProduk = (id, token) => request(`/produk/${id}`, { method: 'DELETE' }, token);
export const kirimKredensial = (aksi, data) => request(`/auth/${aksi}`, { method: 'POST', body: JSON.stringify(data) });
