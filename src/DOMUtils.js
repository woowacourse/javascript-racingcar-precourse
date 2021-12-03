import { $ } from './utils.js';

const hideRacingCountSection = () => {
  $('#racing-count-title').style.display = 'none';
  $('#racing-count-form').style.display = 'none';
};

const hideRacingResultSection = () => {
  $('#racing-result-title').style.display = 'none';
};

const DOMUtils = {
  initSection: () => {
    hideRacingCountSection();
    hideRacingResultSection();
  },

  disableCarNamesForm: () => {
    $('#car-names-input').disabled = true;
    $('#car-names-submit').disabled = true;
  },

  showRacingCountSection: () => {
    $('#racing-count-title').style.display = '';
    $('#racing-count-form').style.display = '';
  },

  disableRacingCountForm: () => {
    $('#racing-count-input').disabled = true;
    $('#racing-count-submit').disabled = true;
  },

  showRacingResultTitle: () => {
    $('#racing-result-title').style.display = '';
  },

  showRacingResult: array => {
    let result = '';

    array.forEach(object => {
      const hyphenGraph = makeHyphenGraph(object._location);
      result += `<div>${object._name}: ${hyphenGraph}</div>`;
    });
    result += '<br/>';

    $('#app').insertAdjacentHTML('beforeend', result);
  },

  showWiners: array => {
    const maxValue = Math.max(...array.map(object => object._location));
    const winners = array
      .filter(object => object._location === maxValue)
      .map(object => object._name)
      .join(',');

    $('#app').insertAdjacentHTML('beforeend', `<span id="racing-winners">${winners}</span>`);
  },
};

const makeHyphenGraph = number => {
  let result = '';
  Array.from({ length: number }, () => (result += '-'));
  return result;
};

export default DOMUtils;
