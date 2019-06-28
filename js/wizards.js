'use strict';

(function () {
  window.setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var similarListElement = window.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsData = createWizards(4);

  window.backend.load(getWizard(wizardsData), window.backend.errorHandler);

  function getWizard(wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
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
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColors;

    return wizardElement;
  }
})();
