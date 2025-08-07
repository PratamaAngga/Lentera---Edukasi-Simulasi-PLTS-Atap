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

  // Load Banner
  fetch("components/banner.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("banner").innerHTML = data;
    });

  // Load Footer
  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });

  // Load hero
  fetch("hero.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("hero").innerHTML = data;
    });

  // Load cara kerja
  fetch("cobaCaraKerja.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("caraKerja").innerHTML = data;
    });

  // Load alasan plts
  fetch("kenapaPLTS.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("alasanPlts").innerHTML = data;
    });

  // Load Mitos fakta
  fetch("mitosFakta.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("MitosFakta").innerHTML = data;
    includeHtml();
    });

  // Load alasan
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
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const mitos = card.querySelector(".card-mitos");
  const arrow = card.querySelector(".arrow-toggle");

  mitos.addEventListener("click", () => {
    
    card.classList.toggle("active");

    if (arrow) {
      arrow.classList.toggle("rotate");
    }
  });
});

