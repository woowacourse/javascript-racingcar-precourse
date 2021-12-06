import {
  handleCarNamesSubmitButton,
  handleRacingCountSubmitButton,
} from '../src/domain/handlers.js';
import {
  hideRacingCountContainer,
  hideResultContainer,
} from '../src/view/display.js';

export const state = {
  carArray: [],
};

const init = function () {
  const carNamesButton = document.querySelector('#car-names-submit');
  const racingCountButton = document.querySelector('#racing-count-submit');

  hideRacingCountContainer();
  hideResultContainer();

  carNamesButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleCarNamesSubmitButton();
  });

  racingCountButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleRacingCountSubmitButton();
  });
};

init();
