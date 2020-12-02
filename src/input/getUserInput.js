import getCarName from './getCarName.js';

function userInputHandler(target) {
  if (target.id === 'car-names-submit') {
    getCarName();
  }
  if (target.id === 'racing-count-submit') {
    //
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
