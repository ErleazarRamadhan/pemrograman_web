export const produkAwal = [
  { id: 1, nama: 'Cappuccino', kategori: 'Kopi', harga: 28000, gambar: 'img/cappuccino.jpg', deskripsi: 'Espresso dengan steamed milk dan busa susu yang lembut.' },
  { id: 2, nama: 'Niscala Latte', kategori: 'Kopi', harga: 30000, gambar: 'img/latte.jpg', deskripsi: 'Perpaduan espresso dan susu hangat dengan rasa seimbang.' },
  { id: 3, nama: 'Kopi Gula Aren', kategori: 'Kopi', harga: 32000, gambar: 'img/kopi-susu-gula-aren.jpg', deskripsi: 'Kopi susu dingin dengan manis alami gula aren.' },
  { id: 4, nama: 'Croissant Cokelat', kategori: 'Pastry', harga: 25000, gambar: 'img/croissant.jpg', deskripsi: 'Croissant renyah berlapis dengan isian cokelat.' },
  { id: 5, nama: 'Tiramisu', kategori: 'Pastry', harga: 32000, gambar: 'img/tiramisu.jpg', deskripsi: 'Pastry lembut dengan krim mascarpone dan taburan kakao.' },
  { id: 6, nama: 'Pain au Raisin', kategori: 'Pastry', harga: 27000, gambar: 'img/Pain_aux_raisins.jpg', deskripsi: 'Pastry berlapis dengan custard lembut dan kismis.' },
];

export const rupiah = (jumlah) => new Intl.NumberFormat('id-ID').format(jumlah);
