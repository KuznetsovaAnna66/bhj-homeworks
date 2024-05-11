const signin = document.getElementById("signin");
const signinForm = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const logoutBtn = document.getElementById("logout__btn");

function logIn() {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
}

function reset() {
  signinForm.reset();
  localStorage.clear();
}

function logOut() {
  signin.classList.add("signin_active");
  welcome.classList.remove("welcome_active");
  logoutBtn.classList.remove("btn-logout_active");
}

if (localStorage.getItem("user_id")) {
  userId.textContent = localStorage.getItem("user_id");
  logIn();
}

signinForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(signinForm);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";
  xhr.send(formData);

  xhr.addEventListener("load", () => {
    const data = xhr.response;

    if (data.success) {
      const currentUserId = data.user_id;
      userId.textContent = currentUserId;
      localStorage.setItem("user_id", currentUserId);
      logIn();
    } else {
      alert("Неверный логин/пароль");
      reset();
    }
  });
});

logoutBtn.addEventListener("click", (e) => {
  logOut();
  reset();
});
