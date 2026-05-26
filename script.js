
// =====================
// HERO CAROUSEL
// =====================
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  index++;
  if (index >= slides.length) index = 0;
}

setInterval(showSlide, 4000);


// =====================
// CLICKABLE CARDS NAVIGATION
// =====================
document.querySelectorAll(".clickable").forEach(card => {
  card.addEventListener("click", () => {
    alert("Property page coming soon 🚀");
  });
});


// =====================
// SMOOTH SCROLL NAV
// =====================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});