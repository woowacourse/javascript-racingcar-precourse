import {printAll} from './racing-result-printer.js';
import {isEmpty, showContainer} from './util.js';

export default class SubmitHandler {
  constructor(racingCarGame) {
    this.racingCarGame = racingCarGame;
  }

  handleCarNames() {
    this.racingCarGame.cars = document.getElementById('car-names-input').value;

    if (isEmpty(this.racingCarGame.cars)) return;

    showContainer('racing-count');
  }

  handleRacingCount() {
    this.racingCarGame.racingCount
    = document.getElementById('racing-count-input').value;

    if (this.racingCarGame.racingCount === 0) return;

    this.racingCarGame.start();

    showContainer('result');

    printAll(this.racingCarGame);
  }
}

