import playCarRacing from './playCarRacing.js';
import printRacingResult from './printRacingResult.js';
import addSelectedWinner from './addSelectedWinner.js';

export default function startRacingGame(racingCount) {
  const $app = document.querySelector('#app');
  const $resultScreenDiv = document.createElement('div');
  $app.appendChild($resultScreenDiv);

  for (let i = 0; i < racingCount; i++) {
    playCarRacing();
    printRacingResult($resultScreenDiv);
  }

  addSelectedWinner();
}
