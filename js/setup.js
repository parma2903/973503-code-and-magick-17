'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var wizardCoat = window.setup.querySelector('.wizard-coat');
  var wizardEye = window.setup.querySelector('.wizard-eyes');
  var userNameInput = window.setup.querySelector('.setup-user-name');
  var coatColorInput = window.setup.querySelector('[name=coat-color]');
  var eyesColorInput = window.setup.querySelector('[name=eyes-color]');
  var setupTop = '80px';
  var setupLeft = '50%';

  window.setup.querySelector('.setup-similar').classList.remove('hidden');

  window.coloringElements(wizardCoat, window.wizardData.COAT_COLORS, coatColorInput);
  window.coloringElements(wizardEye, window.wizardData.EYES_COLORS, eyesColorInput);
  window.coloringElements(window.util.wizardFireball, window.wizardData.FIREBALL_COLORS, window.util.fireballColorInput);

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    window.closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      window.closePopup();
    }
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  function onPopupEscPress(evt) {
    if (evt.keyCode === 27) {
      window.closePopup();
    }
  }

  function openPopup() {
    window.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  window.closePopup = function () {
    window.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.setup.style.top = setupTop;
    window.setup.style.left = setupLeft;
  };

})();
