document.addEventListener("DOMContentLoaded", () => {
  const coffeeFlow = document.getElementById("coffeeFlow");
  const brainFill = document.getElementById("brainFill");
  const dots = document.getElementById("dots");
  const bulb = document.getElementById("bulb");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollY / docHeight, 1);

    // Animate coffee flow path
    const totalLength = 1000;
    coffeeFlow.style.strokeDashoffset = totalLength * (1 - Math.min(progress * 1.2, 1));

    // Fill brain as coffee reaches it
    brainFill.setAttribute("height", `${Math.min(progress * 90, 90)}`);

    // Show dots during mid-scroll
    if (progress > 0.4 && progress < 0.8) {
      dots.style.opacity = 1;
      bulb.style.opacity = 0;
    } else if (progress >= 0.8) {
      dots.style.opacity = 0;
      bulb.style.opacity = 1;
    } else {
      dots.style.opacity = 0;
      bulb.style.opacity = 0;
    }
  });
});
