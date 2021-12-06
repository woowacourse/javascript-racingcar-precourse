export default function init() {
  const [countTitle, resultTitle] = document.querySelectorAll('h4');

  countTitle.setAttribute('id', 'count-title');
  resultTitle.setAttribute('id', 'result-title');

  createResultDiv();
}

function createResultDiv() {
  const resultDiv = document.createElement('div');
  resultDiv.setAttribute('id', 'result-div');
  document.querySelector('#app').appendChild(resultDiv);
}
