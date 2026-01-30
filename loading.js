window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loading-screen");
    if (loader) {
      loader.classList.add("fade-out");
    }
  }, 2000); // 2 seconds
});