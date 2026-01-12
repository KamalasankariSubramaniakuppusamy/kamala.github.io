/* ----------------------------------------------------
   BASE.JS — Coffee · Vanilla · Chocolate Theme
   Global behavior for navigation, theme, and UX
---------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");
  const themeToggle = document.getElementById("theme-toggle");

  /* ==================================================
     THEME SETUP — LIGHT DEFAULT
     ================================================== */

  // Default theme: LIGHT
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }

  /* ---------- THEME TOGGLE ---------- */
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
      }
    });
  }

  /* ==================================================
     MOBILE NAVIGATION
     ================================================== */

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
    });
  }

  /* Close nav on link click (mobile) */
  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      if (menuToggle) menuToggle.textContent = "☰";
    });
  });

  /* ==================================================
     HEADER SCROLL EFFECT
     ================================================== */

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  /* ==================================================
     SMOOTH SCROLL FOR IN-PAGE LINKS
     ================================================== */

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

  /* ==================================================
     PAGE FADE-IN
     ================================================== */

  document.body.classList.add("fade-in");
});
