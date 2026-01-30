// snap scrolling

let isScrolling = false;

window.addEventListener("wheel", (event) => {
  if (isScrolling) return;

  const sections = [...document.querySelectorAll(".first-section, .second-section, .third-section, .fourth-section, .fifth-section, .sixth-section, .seventh-section, .eigth-section, .ninth-section")]; //despite there not being a fourth section in the home page, it works fine since it would be calling nothing.//

  let current = 0;
  let minDistance = Infinity;

  sections.forEach((sec, index) => {
    const distance = Math.abs(sec.getBoundingClientRect().top);
    if (distance < minDistance) {
      minDistance = distance;
      current = index;
    }
  });

  if (event.deltaY > 0 && current < sections.length - 1) {
    // Scroll down
    isScrolling = true;
    sections[current + 1].scrollIntoView({ behavior: "smooth" });
  } 
  else if (event.deltaY < 0 && current > 0) {
    // Scroll up
    isScrolling = true;
    sections[current - 1].scrollIntoView({ behavior: "smooth" });
  }

  setTimeout(() => {
    isScrolling = false;
  }, 900);
});