import {
  hideRacingCountContainer,
  hideResultContainer,
} from './view/display.js';

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
  });

  racingCountButton.addEventListener('click', (event) => {
    event.preventDefault();
  });
};

init();
