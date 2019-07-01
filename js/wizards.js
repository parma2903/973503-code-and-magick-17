'use strict';

(function () {
  window.setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var similarListElement = window.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  window.backend.load(getWizard, window.backend.errorHandler);

  function getWizard(wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.wizardData.NUMBER_OF_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }
})();
