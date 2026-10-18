const katalogProduk = [
  {
    id: 1,
    nama: "Cappuccino",
    kategori: "Kopi",
    harga: 28000,
    gambar: "https://placehold.co/600x400?text=Cappuccino",
    deskripsi: "Espresso dengan steamed milk dan busa susu yang lembut."
  },
  {
    id: 2,
    nama: "Niscala Latte",
    kategori: "Kopi",
    harga: 30000,
    gambar: "https://placehold.co/600x400?text=Niscala+Latte",
    deskripsi: "Perpaduan espresso dan susu hangat dengan rasa seimbang."
  },
  {
    id: 3,
    nama: "Kopi Gula Aren",
    kategori: "Kopi",
    harga: 32000,
    gambar: "https://placehold.co/600x400?text=Kopi+Gula+Aren",
    deskripsi: "Kopi susu dingin dengan manis alami gula aren."
  },
  {
    id: 4,
    nama: "Croissant Cokelat",
    kategori: "Pastry",
    harga: 25000,
    gambar: "https://placehold.co/600x400?text=Croissant+Cokelat",
    deskripsi: "Croissant renyah berlapis dengan isian cokelat."
  },
  {
    id: 5,
    nama: "Tiramisu",
    kategori: "Pastry",
    harga: 32000,
    gambar: "https://placehold.co/600x400?text=Tiramisu",
    deskripsi: "Pastry lembut dengan krim mascarpone dan taburan kakao."
  },
  {
    id: 6,
    nama: "Pain au Raisin",
    kategori: "Pastry",
    harga: 27000,
    gambar: "https://placehold.co/600x400?text=Pain+au+Raisin",
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
          <p class="small text-secondary">${produk.deskripsi}</p>
          <span class="fw-bold text-primary mt-auto">Rp ${formatterHarga.format(produk.harga)}</span>
        </div>
      </article>
    </div>
  `).join("");
}

function filterKategori(kategori) {
  const produkTersaring = kategori === "Semua"
    ? katalogProduk
    : katalogProduk.filter((produk) => produk.kategori === kategori);

  renderKatalog(produkTersaring);
}

if (document.querySelector("#katalog-container")) {
  document.querySelectorAll("[data-filter-kategori]").forEach((tombol) => {
    tombol.addEventListener("click", () => {
      document.querySelectorAll("[data-filter-kategori]").forEach((item) => {
        const aktif = item === tombol;
        item.classList.toggle("btn-primary", aktif);
        item.classList.toggle("btn-outline-primary", !aktif);
        item.setAttribute("aria-pressed", aktif);
      });

      filterKategori(tombol.dataset.filterKategori);
    });
  });

  renderKatalog(katalogProduk);
}

if (document.querySelector("#formPesan")) {
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
    });
  });
}
