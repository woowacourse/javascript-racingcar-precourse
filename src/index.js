import { hideCountInputAndResult } from './init/setScreen.js';
import handleCarNamesSubmit from './input/handleCarNames.js';
import handleRacingCountSubmit from './input/handleRacingCount.js';

function init() {
  const $carNamesSubmit = document.querySelector('#car-names-submit');
  const $racingCountSubmit = document.querySelector('#racing-count-submit');

  hideCountInputAndResult();

  $carNamesSubmit.addEventListener('click', handleCarNamesSubmit);
  $racingCountSubmit.addEventListener('click', handleRacingCountSubmit);
}

export default function racingCarGame() {
  init();
}

window.addEventListener('DOMContentLoaded', () => {
  racingCarGame();
});
