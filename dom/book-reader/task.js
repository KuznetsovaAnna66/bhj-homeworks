const book = document.getElementById("book");
const fontSizes = Array.from(document.querySelectorAll(".font-size"));
const textColors = Array.from(
  document.querySelectorAll(".book__control_color .color")
);
const bgColors = Array.from(
  document.querySelectorAll(".book__control_background .color")
);

fontSizes.forEach((fontSize) => {
  fontSize.addEventListener("click", (e) => {
    e.preventDefault();
    fontSizes.forEach((item) => item.classList.remove("font-size_active"));

    const bookClassName = [...book.classList].find((className) =>
      className.startsWith("book_fs-")
    );
    if (bookClassName) {
      book.classList.remove(bookClassName);
    }

    fontSize.classList.add("font-size_active");
    if (fontSize.dataset.size) {
      book.classList.add(`book_fs-${fontSize.dataset.size}`);
    }
  });
});

bgColors.forEach((bgColor) => {
  bgColor.addEventListener("click", (e) => {
    e.preventDefault();
    bgColors.forEach((item) => {
      item.classList.remove("color_active");
    });

    book.classList.forEach((className) => {
      if (className.startsWith("book_bg-")) {
        book.classList.remove(className);
      }
    });

    bgColor.classList.add("color_active");
    if (bgColor.dataset.bgColor) {
      book.classList.add(`book_bg-${bgColor.dataset.bgColor}`);
    }
  });
});

textColors.forEach((textColor) => {
  textColor.addEventListener("click", (e) => {
    e.preventDefault();
    textColors.forEach((item) => item.classList.remove("color_active"));

    book.classList.forEach((className) => {
      if (className.startsWith("book_color-")) {
        book.classList.remove(className);
      }
    });

    textColor.classList.add("color_active");
    if (textColor.dataset.textColor) {
      book.classList.add(`book_color-${textColor.dataset.textColor}`);
    }
  });
});
