window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    document.querySelector("header").style.backgroundColor = "#000";
  } else document.querySelector("header").style.background = "none";
});
