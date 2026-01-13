// ================= NAVBAR LOADER =================
fetch("components/navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar-placeholder").innerHTML = html;
    initNavbar();
  });

function initNavbar() {
  setupThemeToggle();
  setupMobileMenu();
  setActiveNavLink();
}

// ================= THEME TOGGLE =================
function setupThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  // Default = LIGHT
  const saved = localStorage.getItem("theme") || "light";
  document.body.classList.remove("dark", "light");
  document.body.classList.add(saved);

  toggle.addEventListener("click", () => {
    const next = document.body.classList.contains("light") ? "dark" : "light";
    document.body.classList.remove("dark", "light");
    document.body.classList.add(next);
    localStorage.setItem("theme", next);
  });
}

// ================= MOBILE MENU =================
function setupMobileMenu() {
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.textContent = nav.classList.contains("open") ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.textContent = "☰";
    });
  });
}

// ================= ACTIVE LINK (FIXED) =================
function setActiveNavLink() {
  const links = document.querySelectorAll(".nav a");
  if (!links.length) return;

  let path = window.location.pathname;

  // Remove trailing slash
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  const current = path.split("/").pop(); // index.html, about.html, etc.
  const isHome = current === "" || current === "index.html";

  links.forEach(link => link.classList.remove("active"));

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (!href) return;

    if (isHome && href === "index.html") {
      link.classList.add("active");
    } else if (!isHome && href === current) {
      link.classList.add("active");
    }
  });
}
