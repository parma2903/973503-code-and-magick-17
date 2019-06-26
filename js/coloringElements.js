'use strict';

(function () {
  var wizardFireball = window.setup.querySelector('.setup-fireball-wrap');
  var fireballColorInput = window.setup.querySelector('[name=fireball-color]');

  function changesColorElementOnClick(wizardElement, colorArray, input) {
    var count = 1;
    var fireballCount = 1;
    wizardElement.addEventListener('click', function () {
      wizardElement.style.fill = colorArray[count++];
      if (count >= colorArray.length) {
        count = 0;
      }
      input.value = wizardElement.style.fill;
    });
    wizardFireball.addEventListener('click', function () {
      wizardFireball.style.backgroundColor = window.wizardData.FIREBALL_COLORS[fireballCount++];
      if (fireballCount >= window.wizardData.FIREBALL_COLORS.length) {
        fireballCount = 0;
      }
      fireballColorInput.value = window.wizardData.FIREBALL_COLORS[fireballCount++];
    });
  }

  window.coloringElements = changesColorElementOnClick;

  window.util = {
    wizardFireball: wizardFireball,
    fireballColorInput: fireballColorInput
  };
})();
