const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let menuContainer = document.getElementById('about-nav');
  let menuItem = document.querySelector('.nav-active');
  let menuLinks = document.querySelectorAll(".about-nav-item");

  function updateStyles() {
    let isScrolled = window.scrollY > 100;

    menuContainer.style.backgroundColor = isScrolled ? "#ff652f" : "transparent";
    menuContainer.style.opacity = isScrolled ? "0.9" : "1";
    menuItem.style.color = isScrolled ? "#272727" : "#ff652f";

    menuLinks.forEach(function (link) {
      link.addEventListener("mouseenter", function () {
        link.style.color = isScrolled ? "#272727" : "#ff652f";
      });

      link.addEventListener("mouseleave", function () {
        link.style.color = isScrolled ? "white" : "white";
      });
    });
  }

  // Apply styles immediately on page load
  updateStyles();

  window.addEventListener("scroll", function () {
    updateStyles();
  });
});




