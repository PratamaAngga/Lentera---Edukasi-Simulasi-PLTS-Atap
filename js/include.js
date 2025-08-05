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

  // Load cara kerja
  fetch("cobaCaraKerja.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("caraKerja").innerHTML = data;
    });

  // Load alasan
});

document.addEventListener("DOMContentLoaded", function () {
  const comment = document.querySelector(".comment"); // jika hanya satu komentar

  const replyToggle = comment.querySelector(".icon-reply span");
  const replySection = comment.querySelector(".reply");
  const chevron = replyToggle.querySelector(".chevron");
  const iconReply = comment.querySelector(".icon-reply");

  // Awal: Sembunyikan reply dan ganti chevron
  replySection.style.display = "none";
  chevron.src = "assets/icon/chevron-down.png";

  // Event klik
  replyToggle.addEventListener("click", function () {
    const isVisible = replySection.style.display === "block";

    // Toggle tampilan
    replySection.style.display = isVisible ? "none" : "block";

    // Ganti chevron icon
    chevron.src = isVisible
      ? "assets/icon/chevron-down.png"
      : "assets/icon/chevron-up.png";

    // Toggle margin bottom
    iconReply.style.marginBottom = isVisible ? "0" : "36px";
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
