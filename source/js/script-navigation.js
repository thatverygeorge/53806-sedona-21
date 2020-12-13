"use strict";

const navigation = document.querySelector(".navigation");
const button = document.querySelector(".navigation__toggle");

navigation.classList.remove("navigation--no-js");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  navigation.classList.toggle("navigation--active");

  if (navigation.classList.contains("navigation--active")) {
    button.querySelector("span").textContent = "Закрыть меню"
  } else {
    button.querySelector("span").textContent = "Открыть меню"
  }

  button.blur();
});
