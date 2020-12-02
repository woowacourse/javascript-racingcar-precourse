import getUserInput from './input/getUserInput.js';

function hideScreen() {
  const $inputRaceNumberScreen = document.querySelector(
    '.car-game-container > div:last-child',
  );
  const $resultScreen = document.querySelector('#app > div:last-child');

  $inputRaceNumberScreen.style.display = 'none';
  $resultScreen.style.display = 'none';
}

export default function RacingCarGame() {
  hideScreen();
  getUserInput();
}

new RacingCarGame();
