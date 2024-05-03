const form = document.querySelector("form");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let divTask = document.createElement("div");
  taskList.appendChild(divTask);
  divTask.classList.add("task");

  let divTitle = document.createElement("div");
  divTask.appendChild(divTitle);
  divTitle.classList.add("task__title");
  divTitle.innerText = taskInput.value;

  divTask.insertAdjacentHTML(
    "beforeEnd",
    '<a href="#" class="task__remove">&times;</a>'
  );

  form.reset();
});

taskList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("task__remove")) {
    event.target.closest(".task").remove();
  }
});
