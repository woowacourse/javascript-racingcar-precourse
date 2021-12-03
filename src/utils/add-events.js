import playRacing from './play-racing.js';
import showWinners from './show-winners.js';
import { DOM } from '../constants/index.js';

const onCarNamesSubmitClick = (event, input) => {
  event.preventDefault();
  if (!input.isCarNamesValid(DOM.$carNamesInput.value)) {
    DOM.$carNamesInput.value = '';

    return;
  }
  DOM.$carNamesSubmit.disabled = true;
  DOM.$carNamesInput.disabled = true;
  DOM.$racingCountSubmit.disabled = false;
  DOM.$racingCountInput.disabled = false;
};

export const addCarNamesSubmitClickEvent = input => {
  DOM.$carNamesSubmit.addEventListener('click', event => onCarNamesSubmitClick(event, input));
};

const onRacingCountSubmitClick = (event, input) => {
  event.preventDefault();
  if (!input.isRacingCountValid(DOM.$racingCountInput.value)) {
    DOM.$racingCountInput.value = '';

    return;
  }
  input.setRacingCount(parseInt(DOM.$racingCountInput.value, 10));
  const carObjectArray = playRacing(input);
  showWinners(carObjectArray);
  DOM.$racingCountSubmit.disabled = true;
  DOM.$racingCountInput.disabled = true;
};

export const addRacingCountSubmitClickEvent = input => {
  DOM.$racingCountSubmit.addEventListener('click', event => onRacingCountSubmitClick(event, input));
};

export const addRacingCountInputKeyupEvent = () => {
  DOM.$racingCountInput.addEventListener('keyup', () => {
    DOM.$racingCountInput.value = DOM.$racingCountInput.value.replace(/[^0-9]/g, '');
  });
};
