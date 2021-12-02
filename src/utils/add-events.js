import { $ } from './common.js';
import playRacing from './play-racing.js';
import showWinners from './show-winners.js';

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
      const carObjectArray = playRacing(input);
      showWinners(carObjectArray);
      $racingCountSubmit.disabled = true;
    } else {
      $racingCountInput.value = '';
    }
  });
};

export const addRacingCountInputKeyupEvent = () => {
  const $racingCountInput = $('racing-count-input');

  $racingCountInput.addEventListener('keyup', () => {
    $racingCountInput.value = $racingCountInput.value.replace(/[^0-9]/g, '');
  });
};
