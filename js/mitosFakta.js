function includeHtml() {
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
}