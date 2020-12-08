import { getCarNames, getRacingCount } from './user/actions.js';
import play from './game/actions.js';

const carNamesSubmitBtn = document.getElementById('car-names-submit');
const racingCountSubmitBtn = document.getElementById('racing-count-submit');
const gameResultContainer = document.getElementById('game-result-container');
const racingCountContainer = document.getElementById('racing-count-container');
const gameResult = document.getElementById('game-result');

export default function RacingCarGame() {
  let carNames;
  let racingCount;

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
