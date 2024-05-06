const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementsByClassName("poll__answer");
const poll = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.addEventListener("load", () => {
  let obj = JSON.parse(xhr.response);

  console.log(obj);
  pollTitle.innerText = obj.data.title;

  for (let i = 0; i < obj.data.answers.length; i++) {
    poll.insertAdjacentHTML(
      "beforeEnd",
      `<button class="poll__answer"> ${obj.data.answers[i]} </button>`
    );
  }

  Array.from(pollAnswers).forEach((element) => {
    element.addEventListener("click", () => {
      alert("Спасибо, ваш голос засчитан!");
    });
  });
});
