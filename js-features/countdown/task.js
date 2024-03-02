const timer = document.getElementById("timer");
let startTime = timer.textContent;
let [...time] = startTime.split(":");
if (time.length === 3) {
  function getTimeInSeconds(time) {
    let hours = time[0] * 3600;
    let minutes = time[1] * 60;
    let seconds = +time[2];

    return hours + minutes + seconds;
  }
}

if (time.length === 1) {
  function getTimeInSeconds(time) {
    let seconds = +time[0];

    return seconds;
  }
}

let timeInSeconds = getTimeInSeconds(time);
timer.textContent = displayTime(timeInSeconds);
let counter = setInterval(countInterval, 1000);

const downloadLink = document.getElementById("download-link");

function countInterval() {
  timeInSeconds--;
  timer.textContent = displayTime(timeInSeconds);

  if (timeInSeconds < 0) {
    timer.textContent = displayTime(0);
    clearInterval(counter);
    alert("Вы победили в конкурсе!");
    location = "https://www.w3schools.com";
    // downloadLink.click();
  }
}

function displayTime(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor(timeInSeconds / 60 - hours * 60);
  const seconds = timeInSeconds % 60;

  return `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${seconds < 10 ? "0" : ""}${seconds} `;
}
