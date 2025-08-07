document.addEventListener("DOMContentLoaded", () => {
  // Load Navbar
  const currentPage = document.body.dataset.page; // 'forum'

  fetch("components/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;

      // Setelah navbar dimuat, baru jalankan pengecekan active
      document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.dataset.page === currentPage) {
          link.classList.add("active");
        }
      });
      const tombolCari = document.getElementById("search-button");
      if (tombolCari) {
        tombolCari.addEventListener("click", () => {
          window.location.href = "HasilCari.html";
        });
      }
    });

  function updateBannerText() {
  const currentPage = document.body.dataset.page;

  const h1 = document.querySelector("#banner .banner h1");
  const p = document.querySelector("#banner .banner p");

  if (!h1 || !p) return;

  if (currentPage === "vendor") {
    h1.textContent = "Temukan Vendormu Disini";
    p.textContent =
      "Temukan penyedia solar panel yang cocok untukmu dan wujudkan rumah hemat energi!";
  } else if (currentPage === "forum") {
    h1.textContent = "Obrolan Lentera";
    p.textContent =
      "Dengarkan kisah para Sahabat Lentera, dan ajukan pertanyaanmu di ruang diskusi komunitas.";
  } else if (currentPage === "simulasi") {
    h1.textContent = "Simulasikan Hematmu";
    p.textContent =
      "Lihat berapa banyak cahaya matahari bisa gantikan listrikmu, plus estimasi biaya dan dampak lingkungannya.";
  }
  // tambahkan kondisi lainnya sesuai halaman
}

  // Load Banner
  fetch("components/banner.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("banner").innerHTML = data;

      // Setelah banner dimuat, baru ubah teks
    updateBannerText();
    });

  // Load Footer
  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// mitos fakta
// const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//   const mitos = card.querySelector(".card-mitos");
//   const arrow = card.querySelector(".arrow-toggle");

//   mitos.addEventListener("click", () => {
    
//     card.classList.toggle("active");

//     if (arrow) {
//       arrow.classList.toggle("rotate");
//     }
//   });
// });
