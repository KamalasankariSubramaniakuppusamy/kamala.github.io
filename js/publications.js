/* ----------------------------------------------------
   PUBLICATIONS PAGE JS — Card hover log / readiness
---------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Publications page initialized.");

  // Optional: gentle pulse highlight on hover
  const pubs = document.querySelectorAll(".pub-card");
  pubs.forEach(pub => {
    pub.addEventListener("mouseenter", () => {
      pub.style.transition = "box-shadow 0.3s ease";
      pub.style.boxShadow = "0 10px 25px rgba(58,58,50,0.2)";
    });
    pub.addEventListener("mouseleave", () => {
      pub.style.boxShadow = "0 8px 20px rgba(58,58,50,0.1)";
    });
  });
});
