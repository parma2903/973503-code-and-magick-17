'use strict';

(function () {
  function getElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  window.util = {
    getElement: getElement,
  };
})();
