import increaseWinnerCount from './playCarRacing.js';
import addSelectedWinner from './addSelectedWinner.js';
import { showResultTitle } from '../init/setScreen.js';
import { cars } from '../init/cars.js';

function printRacingResult($resultScreenDiv) {
  cars.forEach((car) => {
    $resultScreenDiv.insertAdjacentHTML(
      'beforeend',
      `${car.name}: ${'-'.repeat(car.distance)}<br>`,
    );
  });
  $resultScreenDiv.insertAdjacentHTML('beforeend', '<br>');
}

function playCarRacing(racingCount, $resultScreenDiv) {
  for (let i = 0; i < racingCount; i++) {
    increaseWinnerCount();
    printRacingResult($resultScreenDiv);
  }
}

function appendResultElement($resultScreenDiv) {
  const $app = document.querySelector('#app');
  $app.appendChild($resultScreenDiv);
}

export default function startRacingGame(racingCount) {
  const $resultScreenDiv = document.createElement('div');

  appendResultElement($resultScreenDiv);
  showResultTitle();
  playCarRacing(racingCount, $resultScreenDiv);
  addSelectedWinner($resultScreenDiv);
}
