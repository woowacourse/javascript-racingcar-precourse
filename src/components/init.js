export default function init() {
  setElement();
  createResultDiv();
}

function createResultDiv() {
  const resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'result-div');
  document.querySelector('#app').appendChild(resultDiv);
}

function setElement() {
  const [countTitle, resultTitle] = document.querySelectorAll('h4');
  const [carNameInput, countInput] = document.querySelectorAll('input');
  const [carNameSubmit, countSubmit] = document.querySelectorAll('button');

  countTitle.setAttribute('id', 'count-title');
  resultTitle.setAttribute('id', 'result-title');
  carNameInput.setAttribute('id', 'car-names-input');
  countInput.setAttribute('id', 'racing-count-input');
  carNameSubmit.setAttribute('id', 'car-names-submit');
  countSubmit.setAttribute('id', 'racing-count-submit');
}
