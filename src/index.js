import getUserInput from './input/getUserInput.js';

function addTagID() {
  const $carGameContainer = document.querySelector('.car-game-container');

  $carGameContainer.querySelector('div > input').id = 'car-names-input';
  $carGameContainer.querySelector('div > button').id = 'car-names-submit';
  $carGameContainer.querySelector('div:last-child > input').id =
    'racing-count-input';
  $carGameContainer.querySelector('div:last-child > button').id =
    'racing-count-submit';
}

function hideScreen() {
  const $inputRaceNumberScreen = document.querySelector(
    '.car-game-container > div:last-child',
  );
  const $resultScreen = document.querySelector('#app > div:last-child');

  $inputRaceNumberScreen.style.display = 'none';
  $resultScreen.style.display = 'none';
}

export default function RacingCarGame() {
  addTagID();
  hideScreen();
  getUserInput();
}

new RacingCarGame();
