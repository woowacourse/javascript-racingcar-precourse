import { $ } from './util/dom.js';

export const removeBeforeResult = () => {
  if ($('#result-div') !== null) {
    $('#app').removeChild($('#result-div'));
  }
  let resultDiv = document.createElement('div');
  resultDiv.id = 'result-div';
  $('#app').appendChild(resultDiv);
};
