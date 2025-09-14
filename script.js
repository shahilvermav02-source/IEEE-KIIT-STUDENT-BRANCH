document.addEventListener("DOMContentLoaded", function () {
  // set current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }

  // Try to replace KIIT logo with @2x if available for sharpness on high DPI
  const kiitImg = document.getElementById("kiitLogo");
  if (kiitImg) {
    const try2x = new Image();
    try2x.src = 'assets/kiitlogo@2x.png';
    try2x.onload = () => { kiitImg.src = try2x.src; };
    const try2xWebp = new Image();
    try2xWebp.src = 'assets/kiitlogo@2x.webp';
    try2xWebp.onload = () => { kiitImg.src = try2xWebp.src; };
  }
});
