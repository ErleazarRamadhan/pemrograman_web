CREATE UNIQUE INDEX "Produk_nama_lower_key" ON "Produk" (lower("nama"));

INSERT INTO "Produk" ("nama", "kategori", "harga", "gambar", "deskripsi")
VALUES
  ('Cappuccino', 'Kopi', 28000, 'img/cappuccino.jpg', 'Espresso dengan steamed milk dan busa susu yang lembut.'),
  ('Niscala Latte', 'Kopi', 30000, 'img/latte.jpg', 'Perpaduan espresso dan susu hangat dengan rasa seimbang.'),
  ('Kopi Gula Aren', 'Kopi', 32000, 'img/kopi-susu-gula-aren.jpg', 'Kopi susu dingin dengan manis alami gula aren.'),
  ('Croissant Cokelat', 'Pastry', 25000, 'img/croissant.jpg', 'Croissant renyah berlapis dengan isian cokelat.'),
  ('Tiramisu', 'Pastry', 32000, 'img/tiramisu.jpg', 'Pastry lembut dengan krim mascarpone dan taburan kakao.'),
  ('Pain au Raisin', 'Pastry', 27000, 'img/Pain_aux_raisins.jpg', 'Pastry berlapis dengan custard lembut dan kismis.')
ON CONFLICT DO NOTHING;
