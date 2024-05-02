const cases = Array.from(document.querySelectorAll(".rotator__case"));

function rotate() {
  let index = cases.findIndex((item) =>
    item.classList.contains("rotator__case_active")
  );
  let currentCase = cases[index];
  currentCase.classList.remove("rotator__case_active");

  index = Math.round(Math.random() * (cases.length - 1));
  currentCase = cases[index];
  currentCase.classList.add("rotator__case_active");

  currentCase.style.color = currentCase.dataset.color;
}

setInterval(rotate, 1000);
