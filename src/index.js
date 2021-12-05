import { $ } from './utils/dom.js';
import CarNameValidator from './validators/CarNameValidator.js';
import TryCountValidator from './validators/TryCountValidator.js';

import Car from './components/Car.js';
import RacingCountForm from './components/RacingCountForm.js';
import RacingResult from './components/RacingResult.js';
import RacingWinner from './components/RacingWinner.js';

class RacingCarGame {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
    this.$racingCountForm = new RacingCountForm();
    this.$racingResult = new RacingResult();
    this.$racingWinner = new RacingWinner();
    this.init();
    this.addEventListeners();
  }

  init() {
    this.$racingResult.createDOM();
    this.$racingWinner.createDOM();
    this.$racingCountForm.hide();
    this.$racingResult.hide();
  }

  addEventListeners() {
    $('#car-names-submit').addEventListener('click', this.onClickCarNameSubmitButton.bind(this));
    $('#racing-count-submit').addEventListener(
      'click',
      this.onClickTryCountSubmitButton.bind(this),
    );
  }

  onClickCarNameSubmitButton(event) {
    event.preventDefault();
    this.cars = [];
    const splittedCarNames = $('#car-names-input').value.split(',');
    if (!this.validateCarNames(splittedCarNames)) return;
    splittedCarNames.forEach(carName => this.cars.push(new Car(carName)));
    this.$racingCountForm.show();
    this.playRacingCarGame();
  }

  validateCarNames(splittedCarNames) {
    return (
      CarNameValidator.checkAtLeastOneCar(splittedCarNames) &&
      CarNameValidator.checkCarNameDuplicated(splittedCarNames) &&
      CarNameValidator.checkCarNameUnderFiveLetter(splittedCarNames)
    );
  }

  onClickTryCountSubmitButton(event) {
    event.preventDefault();
    const submitTryCount = $('#racing-count-input').value;
    if (!TryCountValidator.checkTryCountLessThanZero(submitTryCount)) return;
    this.tryCount = submitTryCount;
    this.playRacingCarGame();
  }

  playRacingCarGame() {
    if (!this.checkExistCarAndTryCount(this.cars, this.tryCount)) return;
    this.resetCarsAdvance();
    this.$racingResult.initResults();

    for (let i = 0; i < this.tryCount; i += 1) {
      this.advanceCars();
      this.$racingResult.runOneTry(this.cars);
      this.$racingResult.render();
    }

    this.$racingWinner.checkWinners(this.cars);
    this.$racingWinner.render();
  }

  checkExistCarAndTryCount(cars, tryCount) {
    return cars.length !== 0 && tryCount !== 0;
  }

  resetCarsAdvance() {
    this.cars.forEach(car => car.resetAdvance());
  }

  advanceCars() {
    this.cars.forEach(car => car.advanceCar());
  }
}

new RacingCarGame();
