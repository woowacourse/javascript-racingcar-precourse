import { $ } from './common.js';
import { ALERT_MESSAGE } from '../constants/index.js';
import { playRacing } from './play-racing.js';

export const addCarNamesSubmitClickEvent = input => {
  const $carNamesSubmit = $('car-names-submit');
  const $carNamesInput = $('car-names-input');
  const $racingCountSubmit = $('racing-count-submit');

  $carNamesSubmit.addEventListener('click', event => {
    event.preventDefault();
    if (input.isCarNamesValid($carNamesInput.value)) {
      $carNamesSubmit.disabled = true;
      $racingCountSubmit.disabled = false;
    } else {
      $carNamesInput.value = '';
    }
  });
};

export const addRacingCountSubmitClickEvent = input => {
  const $racingCountSubmit = $('racing-count-submit');
  const $racingCountInput = $('racing-count-input');

  $racingCountSubmit.addEventListener('click', event => {
    event.preventDefault();
    if (input.isRacingCountValid($racingCountInput.value)) {
      input.setRacingCount(parseInt($racingCountInput.value, 10));
      playRacing(input);
      $racingCountSubmit.disabled = true;
    } else {
      $racingCountInput.value = '';
      alert(ALERT_MESSAGE.notNumeric);
    }
  });
};

export const addRacingCountInputKeydownEvent = () => {
  const $racingCountInput = $('racing-count-input');
  const invalidChars = ['+', '-', 'e'];

  $racingCountInput.addEventListener('keydown', event => {
    if (invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  });
};
