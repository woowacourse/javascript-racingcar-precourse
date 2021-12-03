import { $ } from './util/dom.js';

export const removeBeforeResult = () => {
  if ($('#result-div') !== null) {
    $('#app').removeChild($('#result-div'));
  }
  let resultDiv = document.createElement('div');
  resultDiv.id = 'result-div';
  $('#app').appendChild(resultDiv);
};

export const renderResult = cars => {
  for (let i = 0; i < cars.length; i++) {
    let newSpan = document.createElement('span');
    newSpan.innerHTML = `<br>${cars[i].name}: `;
    for (let j = 0; j < cars[i].score; j++) {
      newSpan.innerHTML += '-';
    }
    $('#result-div').appendChild(newSpan);
  }
  let newBr = document.createElement('span');
  newBr.innerHTML = '<br>';
  $('#result-div').appendChild(newBr);
};
