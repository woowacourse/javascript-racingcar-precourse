import GameModel from '../model/gameModel.js';
import { $ } from '../utils/utils.js';
import GameView from '../view/gameView.js';

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
    const $carNamesForm = $('#car-names-form');
    const $racingCountForm = $('#racing-count-form');

    $carNamesForm.addEventListener('submit', this.handleCarNames);
    $racingCountForm.addEventListener('submit', this.handleRacingCount);
  }

  handleCarNames(e) {
    e.preventDefault();

    const carNamesInput = $('#car-names-input').value;

    try {
      this.gameModel.saveCars(carNamesInput);
    } catch (err) {
      alert(err);
      this.gameView.resetCarNamesInput();
    }

    this.gameView.show(this.gameView.$racingCountTitle);
    this.gameView.show(this.gameView.$racingCountForm);
  }

  handleRacingCount(e) {
    e.preventDefault();

    const racingCountInput = $('#racing-count-input').value;

    try {
      this.gameModel.saveCount(racingCountInput);
    } catch (err) {
      alert(err);
      this.gameView.resetRacingCountInput();
    }
    if (this.gameModel.isAllSubmitted()) {
      this.play();
    }
  }

  play() {
    let totalRoundString = '';

    for (let i = 0; i < this.gameModel.count; i += 1) {
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
