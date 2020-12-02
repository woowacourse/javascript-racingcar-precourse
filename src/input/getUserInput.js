import getCarName from './getCarName.js';

function userInputHandler(target) {
  const $targetInput = target.previousSibling.previousSibling;

  if ($targetInput.type === 'text') {
    getCarName($targetInput.value);
  }
  if ($targetInput.type === 'number') {
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
