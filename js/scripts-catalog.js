
// Объявление переменных
var buyButtons = document.querySelectorAll(".shop-item__buy-button");
var addedNotification = document.querySelector(".added-notification");
var closeAddedNotification = addedNotification.querySelector(".close-modal");
var continueShopping = addedNotification.querySelector(".added-notification__continue-shopping");




// Добавление товара в корзину
for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    addedNotification.classList.add("modal-show");
  })
};

closeAddedNotification.addEventListener("click", function (evt) {
  evt.preventDefault();
  addedNotification.classList.remove("modal-show");
});

continueShopping.addEventListener("click", function (evt) {
  evt.preventDefault();
  addedNotification.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (addedNotification.classList.contains("modal-show")) {
      addedNotification.classList.remove("modal-show");
    }
  }
});
