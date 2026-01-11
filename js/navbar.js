// Load navbar HTML into page
fetch("components/navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar-placeholder").innerHTML = html;
    initNavbar();
  });

function initNavbar() {
  // Theme toggle
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Restore theme
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(saved);
  }

  // Active link detection
  const page = location.pathname.split("/").pop().replace(".html", "") || "home";
  document.querySelectorAll(".nav a").forEach(link => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });

  // Mobile menu
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
}
