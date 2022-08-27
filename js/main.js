// initiate owl carsoul slider
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
  });
});

let header = document.querySelector(".header");
let burgerIcon = document.querySelector(".toggle-icon");
let nav = document.querySelector(".nav");
let navLinks = document.querySelectorAll(".nav a");
let overlay = document.querySelector(".overlay");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerIcon.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
  });
});

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

// change header background on scroll

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "rgb(0 0 0 / 7%) 0px 0.5rem 1rem";
  } else {
    header.style.backgroundColor = "var(--color-primary)";
    header.style.boxShadow = "none";
  }
});

let prog = document.querySelectorAll(".skill__progress__bar");

prog.forEach((p) => {
  p.style.width = p.dataset.value + "%";
});

// faq accordions

let accordions = document.querySelectorAll(".acc-btn");

accordions.forEach((acc) => {
  acc.addEventListener("click", () => {
    acc.nextElementSibling.classList.toggle("active");
  });
});

// portfolio filteration

let categories = document.querySelectorAll(".categories li");
let projects = document.querySelectorAll(".project");
// 1 - remove active class from all categories
// 2 - add active class to clicked one

for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", () => {
    for (let j = 0; j < categories.length; j++) {
      categories[j].classList.remove("active");
    }

    categories[i].classList.add("active");
    let cat = categories[i].dataset.filter;
    if (cat == "all") {
      for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = "block";
      }
    } else {
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].dataset.project === cat) {
          projects[i].style.display = "block";
        } else {
          projects[i].style.display = "none";
        }
      }
    }
  });
}

// scroll btn

let scrollBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    scrollBtn.style.right = "2rem";
  } else {
    scrollBtn.style.right = "-8rem";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// toggle color switcher

let gear = document.querySelector(".settings");

gear.addEventListener("click", () => {
  document.querySelector(".colors").classList.toggle("active");
});

let themeColors = document.querySelectorAll(".colors li");
themeColors.forEach((color) => {
  color.addEventListener("click", () => {
    let root = document.documentElement;
    root.style.setProperty("--color-primary", color.dataset.color);
  });
});

let aboutRight = document.querySelector(".about-up__right");
let aboutLeft = document.querySelector(".about-up__left");
let services = document.querySelector(".services .container");

console.log(services);

const animateOnScroll = () => {
  let windowHeight = window.innerHeight;
  let aboutRightTop = aboutRight.getBoundingClientRect().top;
  let visibleArea = 150;

  let aboutLeftTop = aboutLeft.getBoundingClientRect().top;

  let servicesTop = services.getBoundingClientRect().top;

  // right part animation
  if (aboutRightTop < windowHeight - visibleArea) {
    aboutRight.classList.add("active");
  } else {
    aboutRight.classList.remove("active");
  }

  // left part animation
  if (aboutLeftTop < windowHeight - visibleArea) {
    aboutLeft.classList.add("active");
  } else {
    aboutLeft.classList.remove("active");
  }

  // services animation
  if (servicesTop < windowHeight - visibleArea) {
    services.classList.add("active");
  } else {
    services.classList.remove("active");
  }
};

window.addEventListener("scroll", animateOnScroll);
