// button to make you go to the top

const backToTopBtn = document.getElementById("ReturnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.5) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  document.querySelector(".first-section").scrollIntoView({
    behavior: "smooth"
  });
});