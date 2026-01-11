/* ----------------------------------------------------
   ABOUT PAGE JS — Optional hover/scroll hint
---------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  console.log("About page ready — Education & Experience visible.");

  // Subtle fade-in for detail blocks (already animated by base.js, but this smooths load)
  const details = document.querySelectorAll(".detail-block");
  details.forEach(block => {
    block.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  });
});
