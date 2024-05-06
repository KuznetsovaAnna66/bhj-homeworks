const form = document.getElementById("form");
const progress = document.getElementById("progress");
const input = document.getElementById("file");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  formData.append("file", "file.value");

  let xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    let total = event.total;
    let loaded = event.loaded;
    let progBar = String(loaded / total);
    progress.value = progBar;
  };

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(formData);
});
