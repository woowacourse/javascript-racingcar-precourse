import GameModel from '../model/gameModel.js';
import GameView from '../view/gameView.js';
import { showError } from '../utils/error.js';

export default class GameController {
  constructor() {
    this.gameModel = new GameModel();
    this.gameView = new GameView();

    this.setBinds();
    this.addEvents();
  }

  setBinds() {
    this.handleCarNames = this.handleCarNames.bind(this);
    this.handleRacingCount = this.handleRacingCount.bind(this);
  }

  addEvents() {
    this.gameView.$carNamesForm.addEventListener('submit', this.handleCarNames);
    this.gameView.$racingCountForm.addEventListener('submit', this.handleRacingCount);
  }

  handleCarNames(e) {
    e.preventDefault();

    try {
      this.gameModel.saveCars(this.gameView.$carNamesInput.value);
    } catch (err) {
      this.gameView.resetCarNamesInput();

      return showError(err);
    }

    // this.gameView.makeReadOnly(this.gameView.$carNamesInput);
    this.gameView.show(this.gameView.$racingCountTitle);
    this.gameView.show(this.gameView.$racingCountForm);
  }

  handleRacingCount(e) {
    e.preventDefault();

    try {
      this.gameModel.saveRacingCount(this.gameView.$racingCountInput.value);
    } catch (err) {
      this.gameView.resetRacingCountInput();
      return showError(err);
    }

    // this.gameView.resetRacingResult();
    // this.gameView.makeReadOnly(this.gameView.$racingCountInput);
    this.gameView.show(this.gameView.$racingResultTitle);
    this.play();
  }

  play() {
    let totalRoundString = '';

    for (let i = 0; i < this.gameModel.racingCount; i += 1) {
      const roundString = this.createRoundString(this.gameModel.cars);

      totalRoundString += `${roundString} </br>`;
    }

    this.gameModel.setWinners(this.gameModel.cars);

    this.gameView.renderTotalRound(totalRoundString);
    this.gameView.renderResult(this.createResultString(this.gameModel.winners));
  }

  createRoundString(cars) {
    return cars.reduce((acc, car) => {
      car.move();
      return `${acc} ${car.name}: ${'-'.repeat(car.position)} </br>`;
    }, '');
  }

  createResultString(winners) {
    return winners.join(',');
  }
}
