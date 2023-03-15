const header = document.querySelector("header");
const goToTop = document.querySelector("#go_to_top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    header.style.backgroundColor = "#000";
    goToTop.style.visibility = "visible";
  } else {
    header.style.background = "none";
    goToTop.style.visibility = "hidden";
  }
});
