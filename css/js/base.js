/* ----------------------------------------------------
   BASE.JS — Coffee · Vanilla · Chocolate Theme
   Global behavior for navigation and UX
---------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");

  /* ---------- MOBILE NAVIGATION ---------- */
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      // Change menu icon between ☰ and ✕
      menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
    });
  }

  /* ---------- CLOSE NAV ON LINK CLICK (mobile) ---------- */
  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      if (menuToggle) menuToggle.textContent = "☰";
    });
  });

  /* ---------- HEADER SCROLL EFFECT ---------- */
  // Slightly darken the latte band when scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  /* ---------- SMOOTH SCROLL FOR IN-PAGE LINKS ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        nav?.classList.remove("open");
        if (menuToggle) menuToggle.textContent = "☰";
      }
    });
  });

  /* ---------- PAGE FADE-IN ---------- */
  // Add .fade-in to trigger transition defined in base.css
  document.body.classList.add("fade-in");

  /* ---------- OPTIONAL: SCROLL TO TOP BUTTON (future use) ---------- */
  // const toTop = document.querySelector(".to-top");
  // if (toTop) {
  //   window.addEventListener("scroll", () => {
  //     toTop.classList.toggle("visible", window.scrollY > 400);
  //   });
  //   toTop.addEventListener("click", () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   });
  // }
});
