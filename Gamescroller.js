window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".GameContainer");
  const btnLeft = document.querySelector(".scroll-btn.left");
  const btnRight = document.querySelector(".scroll-btn.right");

  console.log(container, btnLeft, btnRight);

  btnLeft.addEventListener("click", () => {
    container.scrollBy({ left: -600, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    container.scrollBy({ left: 600, behavior: "smooth" });
  });
});
