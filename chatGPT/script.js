// script.js
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const logos = [...track.children];

  // Clone the logos for infinite scrolling effect
  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    track.appendChild(clone);
  });
});
