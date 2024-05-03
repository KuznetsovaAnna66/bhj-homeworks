const links = Array.from(document.querySelectorAll(".has-tooltip"));

const tooltip = document.createElement("div");
tooltip.classList.add("tooltip_active");
tooltip.classList.add("tooltip");
tooltip.setAttribute("style", "left: 0; top: 0;");

links.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (link.previousElementSibling === tooltip) {
      tooltip.classList.toggle("tooltip_active");
    } else {
      link.parentNode.insertBefore(tooltip, link);
      tooltip.textContent = link.title;
    }
    let position = link.getBoundingClientRect();
    let positionTop = Math.ceil(`${position.y}`);
    tooltip.style.top = `${positionTop + 20}px`;

    let positionLeft = Math.ceil(`${position.x}`);
    tooltip.style.left = `${positionLeft}px`;
  });
});
