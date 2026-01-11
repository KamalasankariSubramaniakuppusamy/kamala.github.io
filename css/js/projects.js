/* ----------------------------------------------------
   PROJECTS PAGE JS — Sequential reveal for cards
---------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Projects page loaded.");

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 120);
  });
});
