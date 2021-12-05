import { $ } from './utils/selector.js';
import { submitCarNames } from './utils/submitCarNames.js';
import { submitRacingCount } from './utils/submitRacingCount.js';
import { playRacingGame } from './utils/playRacingGame.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
    this.initEventListeners();
  }

  initEventListeners() {
    $('#car-names-submit').addEventListener('click', () => {
      this.cars = submitCarNames();
    });

    $('#racing-count-submit').addEventListener('click', () => {
      this.racingCount = submitRacingCount();
      if (this.cars.length && this.racingCount) {
        playRacingGame(this.cars, this.racingCount);
      }
    });
  }
}

new RacingGame();
