const textArea = document.getElementById("editor");
const btn = document.getElementById("btn");

textArea.value = localStorage.getItem("text");

textArea.addEventListener("input", () => {
  localStorage.setItem("text", textArea.value);
});

btn.addEventListener("click", (e) => {
  textArea.value = "";
  localStorage.removeItem("text");
});
