const reveal = Array.from(document.querySelectorAll(".reveal"));

function isVisible(element) {
  const { top, bottom } = element.getBoundingClientRect();

  if (bottom < 0) {
    return element.classList.remove("reveal_active");
  }

  if (top > window.innerHeight) {
    return element.classList.remove("reveal_active");
  }

  return element.classList.add("reveal_active");
}

reveal.forEach((item, index) => {
  setInterval(() => {
    isVisible(reveal[index]);
  }, 100);
});
