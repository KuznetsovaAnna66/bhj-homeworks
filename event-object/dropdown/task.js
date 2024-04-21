const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownLinks = Array.from(document.querySelectorAll(".dropdown__link"));

const openMenu = () => {
  dropdownList.classList.toggle("dropdown__list_active");
};

dropdownLinks.forEach((item) =>
  item.addEventListener("click", (event) => {
    event.preventDefault();
    dropdownList.classList.remove("dropdown__list_active");
    dropdownValue.textContent = item.textContent;
  })
);

dropdownValue.addEventListener("click", openMenu);
