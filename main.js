const header = document.querySelector("header");
const goToTop = document.querySelector("#go_to_top");
const headerNav = document.querySelector(".header__nav");
const burgerBtn = document.querySelector("#burger_btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    header.style.backgroundColor = "#000";
    goToTop.style.visibility = "visible";
  } else {
    header.style.background = "none";
    goToTop.style.visibility = "hidden";
  }
});
burgerBtn.addEventListener("click", () => {
  headerNav.classList.toggle("hide");
  console.log("hi");
});
