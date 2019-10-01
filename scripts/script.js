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
  document.body.classList.toggle("light");
  sections.forEach(section => {
    section.classList.toggle("light");
  });
});

// Services

const serviceDescription = document.querySelector(".serviceDescription");
const serviceTabs = document.querySelectorAll(".serviceBtn");

const descriptions = [
  "Zaplanujemy dla Ciebie każdy projekt, od deski do deski. Mamy w projektowaniu ogromne doświadczenie - możemy pochwalić się ponad 200 własnymi pracami oraz ponad 60 zrealizowanymi projektami dla klientów zewnętrznych.",
  "Jesteśmy specjalistami we wznoszeniu nowych konstrukcji. W naszym portfolio budowniczym znajdują się zarówno małe projekty (domy jednorodzinne, krótkie odcinki dróg) jak i te największe - drapacze chmur, mosty zwodzone i inne.",
  "Specjalizujemy się także w remontach - odnawiamy przede wszystkim domy i mieszkania, ale jesteśmy gotowi podjąć się renowacji także innych budynków.",
  "Sprzedajemy hurtowo oraz detalicznie materiały budowlane z kategorii: chemia budowlana, fundamenty, ściany, poddasza, docieplenie, systemy kominowe oraz inne.",
  "Sprzedajemy oraz wypożyczamy pojazdy i maszyny budowlane - między innymi dźwigi, betoniarki, koparki, kruszarki, spychacze, walce, wiertnice i wiele innych."
];

serviceDescription.textContent = descriptions[0];

serviceTabs.forEach(tab => {
  tab.addEventListener("click", e => {
    const decsriptionIndex = descriptions.indexOf(
      serviceDescription.textContent
    );
    if (decsriptionIndex !== Number(e.target.dataset.index)) {
      serviceDescription.classList.remove("fade");
      serviceDescription.textContent =
        descriptions[Number(e.target.dataset.index)];
      setTimeout(() => serviceDescription.classList.add("fade"), 100);
    }

    serviceTabs.forEach(tab => {
      if (
        tab.classList.value.includes("active") &&
        tab.dataset.index !== e.target.dataset.index
      ) {
        tab.classList.remove("active");
      }
      if (tab.dataset.index === e.target.dataset.index) {
        tab.classList.add("active");
      }
    });
  });
});

// owl carusel
$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

const owl = $(".owl-carousel");
owl.owlCarousel({
  items: 3,
  nav: true,
  center: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  navText: [
    `<i class="fas fa-arrow-left arrowBtn"></i>`,
    `<i class="fas fa-arrow-right arrowBtn"></i>`
  ],
  slideTransition: `ease-in-out`,
  responsive: {
    0: {
      items: 1,
      margin: 0
    },

    1024: {
      items: 3
    }
  }
});
$(".play").on("click", function() {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function() {
  owl.trigger("stop.owl.autoplay");
});

//gallery

const gallery = document.querySelector(".gallery");
const img = document.querySelectorAll(".img");
const zoomedImgContainer = document.querySelector(".zoom");
const zoomedImg = document.querySelector(".zoomImage img");
const arrows = document.querySelectorAll(".changeImgBtn");
const closeZoom = document.querySelector(".closeImgBtn");
let imgIndex = 1;

img.forEach(img => img.addEventListener("click", zoomImg));

function zoomImg(e) {
  imgIndex = Number(e.target.dataset.position);
  zoomedImg.attributes.src.value = `img/gallery/${imgIndex}.jpg`;
  zoomedImgContainer.classList.add("active");
  gallery.style.zIndex = "150";
}

arrows.forEach(arrow => arrow.addEventListener("click", changeImg));

function changeImg(e) {
  switch (e.target.dataset.direction) {
    case "left":
      if (imgIndex === 1) imgIndex = 20;
      else imgIndex--;
      break;
    case "right":
      if (imgIndex === 20) imgIndex = 1;
      else imgIndex++;
      break;
  }
  document.querySelector(".zoomImage").classList.add("animate");
  setTimeout(() => {
    zoomedImg.attributes.src.value = `img/gallery/${imgIndex}.jpg`;
  }, 400);
  setTimeout(() => {
    document.querySelector(".zoomImage").classList.remove("animate");
  }, 800);
}

closeZoom.addEventListener("click", () => {
  gallery.style.zIndex = "0";
  zoomedImgContainer.classList.remove("active");
});
