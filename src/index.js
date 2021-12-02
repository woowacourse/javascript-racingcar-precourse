import hideScreen from './init/hideScreen.js';
import handleCarNamesSubmit from './input/carNames.js';

export default function racingCarGame() {
  const $carNamesSubmit = document.querySelector('#car-names-submit');

  hideScreen();
  $carNamesSubmit.addEventListener('click', handleCarNamesSubmit);
}

// eslint-disable-next-line new-cap
new racingCarGame();
