import { $ } from './utils/selector.js';
import { submitCarNames } from './utils/submitCarNames.js';
import { submitRacingCount } from './utils/submitRacingCount.js';

export default class RacingGame {
  constructor() {
    this.carNames = [];
    this.racingCount = 0;
    this.initEventListeners();
  }

  initEventListeners() {
    $('#car-names-submit').addEventListener('click', () => {
      const carNames = submitCarNames();
      console.log(carNames);
    });

    $('#racing-count-submit').addEventListener('click', () => {
      const racingCount = submitRacingCount();
      console.log(racingCount);
    });
  }
}

new RacingGame();
