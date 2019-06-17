'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var numberOfWizards = 4;
var wizards = createWizards(numberOfWizards);
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEye = setup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var userNameInput = setup.querySelector('.setup-user-name');
var coatColorInput = setup.querySelector('[name=coat-color]');
var eyesColorInput = setup.querySelector('[name=eyes-color]');
var fireballColorInput = setup.querySelector('[name=fireball-color]');

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

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

function getElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createWizard(names, surnames, coatColors, eyesColors) {
  var result = {
    name: getElement(names) + ' ' + getElement(surnames),
    coatColor: getElement(coatColors),
    eyesColor: getElement(eyesColors)
  };
  return result;
}

function createWizards(num) {
  for (var k = 0; k < num; k++) {
    wizards.push(createWizard(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS));
  }
  return wizards;
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

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
}

function changesColorElementOnClick(wizardElement, colorArray, input) {
  var count = 1;
  wizardElement.addEventListener('click', function () {

    wizardElement.style.fill = colorArray[count++];
    if (count >= colorArray.length) {
      count = 0;
    }
    input.value = wizardElement.style.fill;
  });
  var fireballCount = 1;
  wizardFireball.addEventListener('click', function () {

    wizardFireball.style.backgroundColor = FIREBALL_COLORS[fireballCount++];
    if (fireballCount >= FIREBALL_COLORS.length) {
      fireballCount = 0;
    }
    fireballColorInput.value = FIREBALL_COLORS[fireballCount++];
  });
}

changesColorElementOnClick(wizardCoat, COAT_COLORS, coatColorInput);
changesColorElementOnClick(wizardEye, EYES_COLORS, eyesColorInput);
changesColorElementOnClick(wizardFireball, FIREBALL_COLORS, fireballColorInput);

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
