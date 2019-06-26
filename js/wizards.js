'use strict';

(function () {
  window.setup = document.querySelector('.setup');
  var similarListElement = window.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizards = createWizards(window.wizardData.numberOfWizards);
  var fragment = document.createDocumentFragment();

  similarListElement.appendChild(fragment);

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  function createWizard(names, surnames, coatColors, eyesColors) {
    var result = {
      name: window.util.getElement(names) + ' ' + window.util.getElement(surnames),
      coatColor: window.util.getElement(coatColors),
      eyesColor: window.util.getElement(eyesColors)
    };
    return result;
  }

  function createWizards(num) {
    var wizardsArray = [];
    for (var k = 0; k < num; k++) {
      wizardsArray.push(createWizard(window.wizardData.NAMES, window.wizardData.SURNAMES, window.wizardData.COAT_COLORS, window.wizardData.EYES_COLORS));
    }
    return wizardsArray;
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }
})();
