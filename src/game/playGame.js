import getCarNames from '../input/getCarNames.js';

export default function playGame() {
  const $carNamesSubmit = document.querySelector('#car-names-submit');
  $carNamesSubmit.addEventListener('click', getCarNames);
}
