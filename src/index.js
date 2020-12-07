import { getCarNames, getRacingCount } from './user/actions.js';
import {
  setRacingCars,
  moveRacingCars,
  checkRacingLog,
  pickWinner,
} from './car/actions.js';

export default function RacingCarGame() {
  const carNamesSubmitBtn = document.getElementById('car-names-submit');
  const racingCountSubmitBtn = document.getElementById('racing-count-submit');

  const play = function (_carNames, _racingCount) {
    const racingCars = setRacingCars(_carNames);
    let racingResult = '';

    for (let i = 0; i < _racingCount; i++) {
      moveRacingCars(racingCars);
      racingResult += checkRacingLog(racingCars);
    }

    racingResult += pickWinner(racingCars);

    return racingResult;
  };

  const printResult = function (_racingResult) {
    document.getElementById('game-result').innerText = _racingResult;
    document.getElementById('game-result-container').hidden = false;
  };

  carNamesSubmitBtn.addEventListener('click', () => {
    this.carNames = getCarNames();

    if (!this.carNames) {
      return;
    }

    document.getElementById('racing-count-container').hidden = false;
  });

  racingCountSubmitBtn.addEventListener('click', () => {
    this.racingCount = getRacingCount();

    if (!this.racingCount) {
      return;
    }

    const racingResult = play(this.carNames, this.racingCount);

    printResult(racingResult);
  });
}

new RacingCarGame();
