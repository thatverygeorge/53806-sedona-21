"use strict";

const form = document.querySelector(".form");

const modalError = document.querySelector(".modal--error");
const modalSuccess = document.querySelector(".modal--success");

let modalCloseBtn;

form.addEventListener("invalid", () => {
  modalError.classList.add("modal--show");

  modalCloseBtn = modalError.querySelector(".modal__close");
  modalCloseBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalError.classList.remove("modal--show");
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modalError.classList.remove('modal--show');
    }
  });
}, true);

form.addEventListener("submit", function () {
  modalSuccess.classList.add("modal--show");

  modalCloseBtn = modalSuccess.querySelector(".modal__close");
  modalCloseBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalSuccess.classList.remove("modal--show");
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modalSuccess.classList.remove('modal--show');
    }
  });
});
