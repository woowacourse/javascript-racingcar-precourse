import getCarNames from './getCarNames.js';

function userInputHandler(target) {
  const $inputRaceNumberScreen = document.querySelector(
    '.car-game-container > div:last-child',
  );

  if (target.id === 'car-names-submit') {
    getCarNames();
    $inputRaceNumberScreen.style.display = 'inline';
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
