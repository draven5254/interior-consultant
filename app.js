const open = document.querySelector(".open-btn");
const close = document.querySelector(".close-btn");
const navbar = document.querySelector(".nav");

open.addEventListener("click", () => {
  navbar.classList.add("active");
});

close.addEventListener("click", () => {
  navbar.classList.remove("active");
});
