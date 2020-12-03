'use strict';

const navigation = document.querySelector('.navigation');
const button = document.querySelector('.navigation__toggle');

navigation.classList.remove('navigation--no-js');

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigation.classList.toggle('navigation--active');
  button.blur();
});
