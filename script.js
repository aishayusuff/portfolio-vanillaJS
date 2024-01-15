const menu = document.querySelector(".hamburger-menu-links");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const overlay = document.querySelector(".overlay");

//Hamburger menu
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    menu.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
    overlay.classList.toggle("blur");
  });

if (menu.classList.contains(".open")) {
  smoothScrollToTop();
}

const smoothScrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//Using Arrows to scroll sections into view

const handlesArrowClick = function(e) {
 const isArrowImg = e.target.tagName === "IMG" && e.target.classList.contains("arrow");
 
 //Guard clause
 if (!isArrowImg) {
  return;
 }
 
 //Gets section
 const section = document.getElementById(`${e.target.dataset.view}`)
 section.scrollIntoView({
  behavior: 'smooth'
 });

}

// handlesArrowClick()
document.body.addEventListener('click', handlesArrowClick);