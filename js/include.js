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
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
