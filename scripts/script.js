// Nav

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");

window.onload = function() {
  if (window.innerWidth < 901) {
    setTimeout(() => nav.classList.remove("active"), 2500);
  }
  if (window.innerWidth > 900) {
    setTimeout(() => {
      toggleTheme.style.zIndex = "30";
    }, 2500);
  }
  setTimeout(() => {
    nav.style.position = "fixed";
    nav.style.zIndex = "20";
    main.style.position = "static";
  }, 2500);
};

main.addEventListener("click", () => {
  if (nav.classList.value.includes("active")) nav.classList.remove("active");
});

hamburger.addEventListener("click", toggleNav);

function toggleNav(e) {
  nav.classList.toggle("active");
}

const navBtns = document.querySelectorAll(".navBtn");
const sections = document.querySelectorAll(".mainSection");

navBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    toggleNav();
    sections.forEach(section => {
      const target = e.target.dataset.target;
      if (
        section.classList.value.includes("active") &&
        !section.classList.value.includes(target)
      ) {
        section.classList.add("disappear");
        setTimeout(() => section.classList.remove("active", "disappear"), 600);
      }
      if (
        section.classList.value.includes(target) &&
        !section.classList.value.includes("active")
      ) {
        section.classList.add("active");
        navBtns.forEach(btn => {
          btn.classList.remove("active");
          if (btn.dataset.target.includes(target)) {
            btn.classList.add("active");
          }
        });
      }
    });
  });
});

// Toggle Light / Dark theme

const toggleTheme = document.querySelector(".toggleTheme");

toggleTheme.addEventListener("click", () => {
  sections.forEach(section => {
    section.classList.toggle("light");
  });
});
