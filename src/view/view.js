import { $ } from '../utils/utils.js';
import { SELECTOR } from '../utils/constants.js';

const DOMUtils = {
  initSection: () => {
    hideRacingCountSection();
    hideRacingResultSection();
  },

  disableCarNamesForm: () => {
    $(SELECTOR.CAR_NAMES_INPUT).disabled = true;
    $(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).disabled = true;
  },

  showRacingCountSection: () => {
    $(SELECTOR.RACING_COUNT_TITLE).style.display = '';
    $(SELECTOR.RACING_COUNT_FORM).style.display = '';
  },

  getCarNames: () => {
    return $(SELECTOR.CAR_NAMES_INPUT).value;
  },

  getRacingCount: () => {
    return $(SELECTOR.RACING_COUNT_INPUT).value;
  },

  disableRacingCountForm: () => {
    $(SELECTOR.RACING_COUNT_INPUT).disabled = true;
    $(SELECTOR.RACING_COUNT_SUBMIT_BUTTON).disabled = true;
  },

  showRacingResultTitle: () => {
    $(SELECTOR.RACING_RESULT_TITLE).style.display = '';
  },

  showRacingResult: array => {
    let result = '';

    array.forEach(object => {
      const hyphenGraph = makeHyphenGraph(object.location);
      result += `<span>${object.name}: ${hyphenGraph}</span><br/>`;
    });
    result += '<br/>';

    $(SELECTOR.APP).insertAdjacentHTML('beforeend', result);
  },

  showWiners: array => {
    const maxValue = Math.max(...array.map(object => object.location));
    const winners = array
      .filter(object => object.location === maxValue)
      .map(object => object.name)
      .join(', ');

    $(SELECTOR.APP).insertAdjacentHTML(
      'beforeend',
      `<div>최종 우승자: 
        <span id="racing-winners">${winners}</span>
      </div>`,
    );
  },
};

const hideRacingCountSection = () => {
  $(SELECTOR.RACING_COUNT_TITLE).style.display = 'none';
  $(SELECTOR.RACING_COUNT_FORM).style.display = 'none';
};

const hideRacingResultSection = () => {
  $(SELECTOR.RACING_RESULT_TITLE).style.display = 'none';
};

const makeHyphenGraph = number => {
  let result = '';
  Array.from({ length: number }, () => (result += '-'));

  return result;
};

export default DOMUtils;
