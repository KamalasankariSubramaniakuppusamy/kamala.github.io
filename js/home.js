/* ----------------------------------------------------
   HOME.JS — Coffee · Vanilla · Chocolate Theme
   Adds soft entrance + floating portrait responsiveness
---------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title");
  const heroSub = document.querySelector(".hero-sub");
  const photo = document.querySelector(".photo-frame");
  const socialIcons = document.querySelector(".social-icons");

  /* ---------- ENTRANCE ANIMATIONS ---------- */
  // fade in text and portrait sequentially
  setTimeout(() => {
    heroTitle?.classList.add("visible");
  }, 200);

  setTimeout(() => {
    heroSub?.classList.add("visible");
  }, 700);

  setTimeout(() => {
    photo?.classList.add("visible");
    socialIcons?.classList.add("visible");
  }, 1100);

  /* ---------- PARALLAX FLOAT EFFECT ---------- */
  // subtle parallax shift on scroll
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (photo) {
      photo.style.transform = `translateY(${scrollY * 0.05}px)`;
    }
  });

  /* ---------- FLOATING RESPONSIVENESS ---------- */
  // disable float animation on small screens for stability
  const handleResize = () => {
    if (window.innerWidth < 800) {
      photo?.classList.remove("floating");
    } else {
      photo?.classList.add("floating");
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize();
});
