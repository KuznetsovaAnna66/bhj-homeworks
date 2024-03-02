let dead = document.getElementById("dead");
let deadCounter = +dead.textContent;
let lost = document.getElementById("lost");
let lostCounter = +lost.textContent;

function newStart() {
  deadCounter = dead.textContent = 0;
  lostCounter = lost.textContent = 0;
}

for (let i = 1; i < 10; i++) {
  let hole = document.getElementById(`hole${i}`);
  hole.onclick = function () {
    if (hole.className.includes("hole_has-mole")) {
      dead.textContent = ++deadCounter;
      if (deadCounter === 10) {
        alert("You won!");
        newStart();
      }
    } else {
      lost.textContent = ++lostCounter;
      if (lostCounter === 5) {
        alert("You lose!");
        newStart();
      }
    }
  };
}
