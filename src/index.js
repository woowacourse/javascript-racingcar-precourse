import { getCarNames, getRacingCount } from './user/actions.js';
import {
  setRacingCars,
  moveRacingCars,
  checkRacingLog,
  pickWinner,
} from './car/actions.js';

const carNamesSubmitBtn = document.getElementById('car-names-submit');
const racingCountSubmitBtn = document.getElementById('racing-count-submit');
const gameResultContainer = document.getElementById('game-result-container');
const racingCountContainer = document.getElementById('racing-count-container');
const gameResult = document.getElementById('game-result');

export default function RacingCarGame() {
  let carNames;
  let racingCount;

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

  const showHiddenContainer = function (_container) {
    _container.hidden = false;
  };

  carNamesSubmitBtn.addEventListener('click', () => {
    carNames = getCarNames();

    if (carNames) {
      showHiddenContainer(racingCountContainer);
    }
  });

  racingCountSubmitBtn.addEventListener('click', () => {
    racingCount = getRacingCount();

    if (racingCount) {
      gameResult.innerText = play(carNames, racingCount);
      showHiddenContainer(gameResultContainer);
    }
  });
}

new RacingCarGame();
