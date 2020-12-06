import {printRacingResult, printWinnersName} from './app-printer.js';

export default class AppContainer {
  constructor(app, racingCarGame) {
    app.onclick = this.onClick.bind(this);
    this.racingCarGame = racingCarGame;
  }

  showContainer(id) {
    document.getElementById(id).hidden = false;
  }

  printResult() {
    if (this.racingCarGame.isEnd) {
      this.showContainer('result');

      printRacingResult(this.racingCarGame);
      printWinnersName(this.racingCarGame.cars);
    }
  }

  submitCarNames(carNames) {
    this.racingCarGame.setCars(carNames);

    if (this.racingCarGame.cars.length > 0) {
      this.showContainer('racing-count');
    }
  }

  submitRacingCount(racingCount) {
    this.racingCarGame.setRacingCount(racingCount);
    this.racingCarGame.start();
    this.printResult();
  }

  onClick(event) {
    if (event.target.id === 'car-names-submit') {
      const carNames = document.getElementById('car-names-input').value;
      this.submitCarNames(carNames);
    }

    if (event.target.id === 'racing-count-submit') {
      const racingCount = document.getElementById('racing-count-input').value;
      this.submitRacingCount(racingCount);
    }
  }
}
