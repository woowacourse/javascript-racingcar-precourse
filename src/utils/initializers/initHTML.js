function initSelectors() {
  const [carNamesInput, racingCountInput] = document.querySelectorAll('input');
  const [carNamesSubmitButton, racingCountSubmitButton] = document.querySelectorAll('button');
  const [racingCountTitle, resultTitle] = document.querySelectorAll('h4');

  carNamesInput.setAttribute('id', 'car-names-input');
  racingCountInput.setAttribute('id', 'racing-count-input');
  carNamesSubmitButton.setAttribute('id', 'car-names-submit');
  racingCountSubmitButton.setAttribute('id', 'racing-count-submit');
  racingCountTitle.setAttribute('id', 'racing-count-title');
  resultTitle.setAttribute('id', 'result-title');
}

function createResultContainer() {
  const resultContainer = document.createElement('div');
  resultContainer.setAttribute('id', 'result-container');
  document.querySelector('#app').appendChild(resultContainer);
}

function createInputGuide() {
  const [carNamesForm, racingCountForm] = document.querySelectorAll('form');
  const carNamesGuide = document.createElement('span');
  const racingCountGuide = document.createElement('span');
  carNamesGuide.setAttribute('id', 'car-names-guide');
  racingCountGuide.setAttribute('id', 'racing-count-guide');
  carNamesForm.appendChild(carNamesGuide);
  racingCountForm.appendChild(racingCountGuide);
}

export default function initHTML() {
  initSelectors();
  createResultContainer();
  createInputGuide();
}
