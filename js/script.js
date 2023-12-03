//Hamburger menu

const menu = document.querySelector(".hamburger-menu-links");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const overlay = document.querySelector(".overlay");

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    menu.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
    overlay.classList.toggle("blur");
  });

if(hamburgerIcon.classList.contains(".open")){

}

if (menu.classList.contains(".open")) {
  smoothScrollToTop();
}

const smoothScrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
