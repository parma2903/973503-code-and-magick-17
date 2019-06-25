'use strict';
var setup = document.querySelector('.setup');

(function () {
  function getElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  window.util = {
    getElement: getElement,
    setup: setup
  };
})();
