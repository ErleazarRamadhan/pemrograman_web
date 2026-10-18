const katalogProduk = [
  {
    id: 1,
    nama: "Cappuccino",
    kategori: "Kopi",
    harga: 28000,
    gambar: "img/cappuccino.jpg",
    deskripsi: "Espresso dengan steamed milk dan busa susu yang lembut."
  },
  {
    id: 2,
    nama: "Niscala Latte",
    kategori: "Kopi",
    harga: 30000,
    gambar: "img/latte.jpg",
    deskripsi: "Perpaduan espresso dan susu hangat dengan rasa seimbang."
  },
  {
    id: 3,
    nama: "Kopi Gula Aren",
    kategori: "Kopi",
    harga: 32000,
    gambar: "img/kopi-susu-gula-aren.jpg",
    deskripsi: "Kopi susu dingin dengan manis alami gula aren."
  },
  {
    id: 4,
    nama: "Croissant Cokelat",
    kategori: "Pastry",
    harga: 25000,
    gambar: "img/croissant.jpg",
    deskripsi: "Croissant renyah berlapis dengan isian cokelat."
  },
  {
    id: 5,
    nama: "Tiramisu",
    kategori: "Pastry",
    harga: 32000,
    gambar: "img/tiramisu.jpg",
    deskripsi: "Pastry lembut dengan krim mascarpone dan taburan kakao."
  },
  {
    id: 6,
    nama: "Pain au Raisin",
    kategori: "Pastry",
    harga: 27000,
    gambar: "img/Pain_aux_raisins.jpg",
    deskripsi: "Pastry berlapis dengan custard lembut dan kismis."
  }
];

function renderKatalog(data) {
  const container = document.querySelector("#katalog-container");
  const formatterHarga = new Intl.NumberFormat("id-ID");

  container.innerHTML = data.map((produk) => `
    <div class="col">
      <article class="card product-card h-100 border-0 shadow-sm">
        <div class="ratio ratio-4x3">
          <img src="${produk.gambar}" class="card-img-top" alt="${produk.nama}">
        </div>
        <div class="card-body d-flex flex-column">
          <span class="badge ${produk.kategori === "Kopi" ? "text-bg-primary" : "text-bg-warning"} align-self-start mb-2">${produk.kategori}</span>
          <h3 class="h5">${produk.nama}</h3>
          <button type="button" class="btn btn-sm btn-outline-primary align-self-start mb-2 btn-detail-produk" aria-controls="detail-produk-${produk.id}">Lihat Detail</button>
          <p id="detail-produk-${produk.id}" class="small text-secondary product-description" style="display: none;">${produk.deskripsi}</p>
          <span class="fw-bold text-primary mt-auto">Rp ${formatterHarga.format(produk.harga)}</span>
        </div>
      </article>
    </div>
  `).join("");
}

function renderDaftarMenu(data) {
  const container = document.querySelector("#daftarMenu");
  const formatterHarga = new Intl.NumberFormat("id-ID");

  container.innerHTML = data.map((produk) => `
    <div class="col" id="menu-${produk.id}" data-kategori="${produk.kategori}">
      <div class="menu-item d-flex align-items-center gap-3 py-3">
        <svg class="ikon" aria-hidden="true"><use href="#ikon-${produk.kategori === "Kopi" ? "kopi" : "pastry"}"></use></svg>
        <div class="flex-grow-1">
          <div class="fw-bold text-uppercase font-monospace">${produk.nama}</div>
          <div class="small font-monospace">${produk.deskripsi}</div>
          <div class="small font-monospace">Rp ${formatterHarga.format(produk.harga)}</div>
        </div>
        <a class="btn btn-sm btn-dark" href="form.html?produk=${produk.id}">Pesan</a>
      </div>
    </div>
  `).join("");
}

function renderProduk(data) {
  if (document.querySelector("#katalog-container")) renderKatalog(data);
  if (document.querySelector("#daftarMenu")) renderDaftarMenu(data);
}

function filterKategori(kategori) {
  const produkTersaring = kategori === "Semua"
    ? katalogProduk
    : katalogProduk.filter((produk) => produk.kategori === kategori);

  renderProduk(produkTersaring);
}

if (document.querySelector("#katalog-container")) {
  $(document).on("click", ".btn-detail-produk", function () {
    const deskripsi = $(this).closest(".card-body").find(".product-description");
    const sedangTampil = deskripsi.is(":visible");

    deskripsi.slideToggle();
    $(this).text(sedangTampil ? "Lihat Detail" : "Sembunyikan Detail");
  });

}

document.querySelectorAll("[data-filter-kategori]").forEach((tombol) => {
  tombol.addEventListener("click", () => {
    document.querySelectorAll("[data-filter-kategori]").forEach((item) => {
      const aktif = item === tombol;
      if (item.classList.contains("nav-link")) {
        item.classList.toggle("active", aktif);
        item.setAttribute("aria-selected", aktif);
      } else {
        item.classList.toggle("btn-primary", aktif);
        item.classList.toggle("btn-outline-primary", !aktif);
      }
      item.setAttribute("aria-pressed", aktif);
    });

    filterKategori(tombol.dataset.filterKategori);
  });
});

renderProduk(katalogProduk);

if (document.querySelector("#formPesan")) {
  const pilihanProduk = document.querySelector("#produk");
  katalogProduk.forEach((produk) => {
    const opsi = document.createElement("option");
    opsi.value = produk.id;
    opsi.dataset.harga = produk.harga;
    opsi.textContent = `${produk.nama} - Rp ${new Intl.NumberFormat("id-ID").format(produk.harga)}`;
    pilihanProduk.append(opsi);
  });

  $(function () {
    $("#nama").on("input", function () {
      const nama = $(this).val().trim();
      $(this).toggleClass("is-invalid", nama === "" || /\d/.test(nama));
    });

    $("#formPesan").on("submit", function (event) {
      event.preventDefault();

      const nama = $("#nama").val().trim();
      const namaTidakValid = nama === "" || /\d/.test(nama);
      const jumlahTidakValid = Number($("#jumlah").val()) <= 0;

      $("#nama").toggleClass("is-invalid", namaTidakValid);
      $("#jumlah").toggleClass("is-invalid", jumlahTidakValid);

      if (namaTidakValid || jumlahTidakValid) return;

      $("#nama, #jumlah").removeClass("is-invalid");
      $("#notifikasiSukses").stop(true, true).fadeIn().delay(3000).fadeOut();
    });
  });
}
