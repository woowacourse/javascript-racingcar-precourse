import {
  $,
  isBlank,
  isIncludeSpace,
  isDuplicated,
  splitUsingComma,
  isOverFiveLetters,
} from './utils.js';
import { default as UI } from './DOMUtils.js';
import { ERROR } from './constants.js';
import Car from './Car.js';

export default function RacingCarGame() {
  const init = () => {
    activateEventListeners();
    UI.hideSection();
  };

  const isValidCarNames = string => {
    if (isBlank(string)) return alert(ERROR.BLANK_SUBMIT);
    if (isIncludeSpace(string)) return alert(ERROR.INCLUDE_SPACE);

    const carNamesArray = splitUsingComma(string);
    if (isDuplicated(carNamesArray)) return alert(ERROR.DUPLICATED);
    if (isOverFiveLetters(carNamesArray)) return alert(ERROR.OVER_FIVE_LETTERS);

    return true;
  };

  const handleCarNamesSubmit = e => {
    e.preventDefault();

    const carNames = $('#car-names-input').value;
    if (!isValidCarNames(carNames)) return;
  };

  const activateEventListeners = () => {
    $('#car-names-submit').onclick = handleCarNamesSubmit;
  };

  init();
}

new RacingCarGame();
