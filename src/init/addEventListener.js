import getCarNames from '../input/getCarNames.js';
import getRacingCount from '../input/getRacingCount.js';

export default function addEventListener() {
  const $carNamesSubmit = document.querySelector('#car-names-submit');
  const $racingCountSubmit = document.querySelector('#racing-count-submit');

  $carNamesSubmit.addEventListener('click', getCarNames);
  $racingCountSubmit.addEventListener('click', getRacingCount);
}
