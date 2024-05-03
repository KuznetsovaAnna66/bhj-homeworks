const products = document.querySelector(".products");
const cartProducts = document.querySelector(".cart__products");
const productAdds = Array.from(document.querySelectorAll(".product__add"));
const productDec = Array.from(
  document.querySelectorAll(".product__quantity-control_dec")
);
const productInc = Array.from(
  document.querySelectorAll(".product__quantity-control_inc")
);
const productQuantityValue = document.getElementsByClassName(
  "product__quantity-value"
);
const productImages = Array.from(document.querySelectorAll(".product__image"));
const product = document.getElementsByClassName("product");
const productCount = document.getElementsByClassName("cart__product-count");

productDec.forEach((dec, index) => {
  dec.addEventListener("click", (event) => {
    if (productQuantityValue[index].textContent <= 1) {
      return 1;
    }
    productQuantityValue[index].textContent--;
  });
});

productInc.forEach((inc, index) => {
  inc.addEventListener("click", (event) => {
    productQuantityValue[index].textContent++;
  });
});

productAdds.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    let indexCheck = Array.from(cartProducts.children).findIndex(
      (child) => child.dataset.id === element.closest(".product").dataset.id
    );
    if (indexCheck != -1) {
      productCount[indexCheck].textContent =
        +productCount[indexCheck].textContent +
        +productQuantityValue[index].textContent;
    } else {
      let cartProduct = document.createElement("div");
      cartProducts.appendChild(cartProduct);
      cartProduct.classList.add("cart__product");
      cartProduct.dataset.id = product[index].dataset.id;
      cartProduct.insertAdjacentHTML(
        "beforeEnd",
        `<img class="cart__product-image" src="${productImages[index].src}">`
      );
      cartProduct.insertAdjacentHTML(
        "beforeEnd",
        `<div class="cart__product-count">${productQuantityValue[index].textContent}</div>`
      );
    }
  });
});
