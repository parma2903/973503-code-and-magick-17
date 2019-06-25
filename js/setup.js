'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEye = setup.querySelector('.wizard-eyes');
  var userNameInput = setup.querySelector('.setup-user-name');
  var coatColorInput = setup.querySelector('[name=coat-color]');
  var eyesColorInput = setup.querySelector('[name=eyes-color]');
  var setupTop = '80px';
  var setupLeft = '50%';

  setup.querySelector('.setup-similar').classList.remove('hidden');

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
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
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
      closePopup();
    }
  }

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setup.style.top = setupTop;
    setup.style.left = setupLeft;
  }

})();
