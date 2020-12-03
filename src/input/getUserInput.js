import getCarNames from './getCarNames.js';
import getRacingCount from './getRacingCount.js';

function userInputHandler(target) {
  if (target.id === 'car-names-submit') {
    getCarNames();
  }
  if (target.id === 'racing-count-submit') {
    getRacingCount();
  }
}

function carGameContainerClickHandler({ target }) {
  if (target.nodeName === 'BUTTON') {
    userInputHandler(target);
  }
}

export default function getUserInput() {
  const $carGameContainer = document.querySelector('.car-game-container');
  $carGameContainer.addEventListener('click', carGameContainerClickHandler);
}
