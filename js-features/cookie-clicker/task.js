const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
let clickAmount = +clickerCounter.textContent;
const clickerSpeed = document.getElementById("clicker__speed");
let start = new Date();

cookie.onclick = function () {
  clickerCounter.textContent = ++clickAmount;
  this.width = clickAmount % 2 ? 250 : 200;

  let stop = new Date();

  let duration = (stop - start) / 1000;
  clickerSpeed.textContent = (clickAmount / duration).toFixed(2);
};
