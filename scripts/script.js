// Nav

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");

window.onload = function() {
  if (window.innerWidth < 901) {
    this.setTimeout(() => nav.classList.remove("active"), 2500);
  }
  this.setTimeout(() => {
    nav.style.position = "fixed";
    main.style.position = "static";
  }, 3000);
};

main.addEventListener("click", () => {
  if (nav.classList.value.includes("active")) nav.classList.remove("active");
});

hamburger.addEventListener("click", toggleNav);

function toggleNav(e) {
  nav.classList.toggle("active");
}
