import { hideCountInputAndResult } from './init/setScreen.js';
import handleCarNamesSubmit from './input/handleCarNames.js';
import handleRacingCountSubmit from './input/handleRacingCount.js';

export default function racingCarGame() {
  const $carNamesSubmit = document.querySelector('#car-names-submit');
  const $racingCountSubmit = document.querySelector('#racing-count-submit');

  hideCountInputAndResult();

  $carNamesSubmit.addEventListener('click', handleCarNamesSubmit);
  $racingCountSubmit.addEventListener('click', handleRacingCountSubmit);
}

// eslint-disable-next-line new-cap
new racingCarGame();
