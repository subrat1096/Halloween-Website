/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
}

if (navClose) {
  navClose.addEventListener("click", () =>
    navMenu.classList.remove("show-menu")
  );
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== GSAP ANIMATION ===============*/

gsap.from(".home__shadow", 1.5, { opacity: 0, y: -300, delay: 0.2 });
gsap.from(".home__points", 1.5, { opacity: 0, y: -300, delay: 0.4 });
gsap.from(".home__grass", 1.5, {
  opacity: 0,
  y: 300,
  delay: 0.2,
  ease: "elastic.out(1,0.5)",
});
gsap.from(".home__pumpkin", 1.5, {
  opacity: 0,
  y: -300,
  delay: 0.6,
  ease: "bounce.out",
});
gsap.from(".home__stones", 1.5, {
  opacity: 0,
  y: 300,
  delay: 0.8,
  ease: "elastic.out(1,.5)",
});
gsap.from(".home__moon", 1.5, {
  opacity: 0,
  y: 300,
  delay: 1.5,
  ease: "elastic.out(1,.5)",
});
gsap.from(".home__titles", 1.5, {
  opacity: 0,
  y: -300,
  delay: 1.5,
  ease: "elastic.out(1,.5)",
});
gsap.from(".home__trees", 1.5, {
  opacity: 0,
  y: 300,
  delay: 2,
  ease: "elastic.out(1,.5)",
});
gsap.from(".home__data", 1.5, {
  opacity: 0,
  y: 200,
  delay: 2,
  ease: "elastic.out(1,.5)",
});
