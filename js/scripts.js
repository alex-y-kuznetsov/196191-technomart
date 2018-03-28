
// Объявление переменных
var openContactModal = document.querySelector(".contacts__contact-us");
var contactModal = document.querySelector(".write-us");
var closeContactModal = contactModal.querySelector(".close-modal--contact-us");
var userName = contactModal.querySelector("#write-us__name");
var contactForm = contactModal.querySelector(".write-us__form");
var userEmail = contactModal.querySelector("#write-us__email");
var userLetter = contactForm.querySelector("#write-us__letter");
var contactModalSend = contactModal.querySelector(".write-us__send");
var isStorageSupported = true;
var storageUserName = "";
var storageUserEmail = "";

var openMapModal = document.querySelector(".contacts__enlarge-map");
var mapModal = document.querySelector(".map");
var closeMapModal = mapModal.querySelector(".close-modal");

var sliderNext = document.querySelector(".cycle-next");
var sliderPrev = document.querySelector(".cycle-prev");
var slideDrills = document.querySelector(".slide--drills");
var slidePunchers = document.querySelector(".slide--punchers");
var sliderPins = document.querySelectorAll(".pager__button");

var servicesDeliverySwitch = document.querySelector(".services__button--delivery");
var servicesWarrantySwitch = document.querySelector(".services__button--warranty");
var servicesCreditSwitch = document.querySelector(".services__button--credit");
var servicesDeliveryBlock = document.querySelector(".services__description--delivery");
var servicesWarrantyBlock = document.querySelector(".services__description--warranty");
var servicesCreditBlock = document.querySelector(".services__description--credit");

var buyButtons = document.querySelectorAll(".shop-item__buy-button");
var addedNotification = document.querySelector(".added-notification");
var closeAddedNotification = addedNotification.querySelector(".close-modal");
var continueShopping = addedNotification.querySelector(".added-notification__continue-shopping");


// Проверка работы Local Storage
try {
  storageUserName = localStorage.getItem("username");
  storageUserEmail = localStorage.getItem("useremail");
} catch (err) {
  isStorageSupported = false;
};

// Открытие окна обратной связи
openContactModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactModal.classList.add("modal-show");

  if (storageUserName) {
    userName.value = storageUserName;
    userEmail.focus();
  } else if (storageUserEmail) {
    userEmail.value = storageUserEmail;
    userLetter.focus();
  } else {
    userName.focus();
  }
});

// Закрытие окна обратной связи по клику
closeContactModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactModal.classList.remove("modal-show");
  contactModalSend.classList.remove("modal-error");
});

// Автозаполнение полей формы из Local Storage
contactForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userLetter.value) {
    evt.preventDefault();
    contactModalSend.classList.remove("modal-error");
    contactModalSend.offsetWidth = contactModalSend.offsetWidth;
    contactModalSend.classList.add("modal-error");
  } else {
    if (isStorageSupported) {
      localStorage.setItem("username", userName.value);
      localStorage.setItem("useremail", userEmail.value);
    }
  }
});

// Закрытие окна обратной связи по ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactModal.classList.contains("modal-show")) {
      contactModal.classList.remove("modal-show");
      contactModalSend.classList.remove("modal-error");
    }
  }
});


// Открытие карты
openMapModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

// Закрытие карты по клику
closeMapModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

// Закрытие карты по ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapModal.classList.contains("modal-show")) {
      mapModal.classList.remove("modal-show");
    }
  }
});


// Переключение слайдов в слайдере
sliderNext.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideDrills.classList.toggle("slide-show");
  slidePunchers.classList.toggle("slide-show");

  for (var i = 0; i < sliderPins.length; i++) {
    sliderPins[i].classList.toggle("pager__button--active");
  }
});

sliderPrev.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideDrills.classList.toggle("slide-show");
  slidePunchers.classList.toggle("slide-show");

  for (var i = 0; i < sliderPins.length; i++) {
    sliderPins[i].classList.toggle("pager__button--active");
  }
});


// Переключение табов в сервисах
servicesDeliverySwitch.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (servicesWarrantyBlock.classList.contains("services-show")) {
    servicesWarrantyBlock.classList.remove("services-show");
  };
  if (servicesCreditBlock.classList.contains("services-show")) {
    servicesCreditBlock.classList.remove("services-show");
  };
  if (servicesWarrantySwitch.classList.contains("services__button--active")) {
    servicesWarrantySwitch.classList.remove("services__button--active");
  };
    if (servicesCreditSwitch.classList.contains("services__button--active")) {
    servicesCreditSwitch.classList.remove("services__button--active");
  };

  servicesDeliveryBlock.classList.add("services-show");
  servicesDeliverySwitch.classList.add("services__button--active");
});

servicesWarrantySwitch.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (servicesDeliveryBlock.classList.contains("services-show")) {
    servicesDeliveryBlock.classList.remove("services-show");
  };
  if (servicesCreditBlock.classList.contains("services-show")) {
    servicesCreditBlock.classList.remove("services-show");
  };
  if (servicesDeliverySwitch.classList.contains("services__button--active")) {
    servicesDeliverySwitch.classList.remove("services__button--active");
  };
    if (servicesCreditSwitch.classList.contains("services__button--active")) {
    servicesCreditSwitch.classList.remove("services__button--active");
  };

  servicesWarrantyBlock.classList.add("services-show");
  servicesWarrantySwitch.classList.add("services__button--active");
});

servicesCreditSwitch.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (servicesWarrantyBlock.classList.contains("services-show")) {
    servicesWarrantyBlock.classList.remove("services-show");
  };
  if (servicesDeliveryBlock.classList.contains("services-show")) {
    servicesDeliveryBlock.classList.remove("services-show");
  };
  if (servicesWarrantySwitch.classList.contains("services__button--active")) {
    servicesWarrantySwitch.classList.remove("services__button--active");
  };
    if (servicesDeliverySwitch.classList.contains("services__button--active")) {
    servicesDeliverySwitch.classList.remove("services__button--active");
  };

  servicesCreditBlock.classList.add("services-show");
  servicesCreditSwitch.classList.add("services__button--active");
});


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
