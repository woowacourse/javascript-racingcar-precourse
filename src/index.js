import Car from './components/Car.js';
import RacingCarNameForm from './components/RacingCarNameForm.js';
import RacingCountForm from './components/RacingCountForm.js';
import RacingResult from './components/RacingResult.js';
import RacingWinner from './components/RacingWinner.js';

class RacingCarGame {
  constructor() {
    this.cars = [];
    this.$racingCarNameForm = new RacingCarNameForm();
    this.$racingCountForm = new RacingCountForm();
    this.$racingResult = new RacingResult();
    this.$racingWinner = new RacingWinner();
    this.initDOM();
    this.addEventListeners();
  }

  initDOM() {
    this.$racingResult.createDOM();
    this.$racingWinner.createDOM();
    this.$racingCountForm.hide();
    this.$racingResult.hide();
  }

  addEventListeners() {
    this.$racingCarNameForm.$submit.addEventListener(
      'click',
      this.onClickCarNameSubmitButton.bind(this),
    );
    this.$racingCountForm.$submit.addEventListener(
      'click',
      this.onClickTryCountSubmitButton.bind(this),
    );
  }

  onClickCarNameSubmitButton(event) {
    event.preventDefault();
    this.initCars();

    const splittedCarNames = this.$racingCarNameForm.getSplittedCarNames();
    if (!this.$racingCarNameForm.validateCarNames(splittedCarNames)) return;

    this.addCars(splittedCarNames);
    this.$racingCountForm.render();
    this.playRacingCarGame();
  }

  onClickTryCountSubmitButton(event) {
    event.preventDefault();

    this.$racingCountForm.getTryCount();
    if (!this.$racingCountForm.validateTryCount()) return;

    this.playRacingCarGame();
  }

  playRacingCarGame() {
    if (!this.checkExistCarAndTryCount(this.cars, this.$racingCountForm.$tryCount)) return;
    this.resetCarsAdvance();
    this.$racingResult.initResults();

    for (let i = 0; i < this.$racingCountForm.$tryCount; i += 1) {
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

  addCars(splittedCarNames) {
    splittedCarNames.forEach(carName => this.cars.push(new Car(carName)));
  }

  resetCarsAdvance() {
    this.cars.forEach(car => car.resetAdvance());
  }

  advanceCars() {
    this.cars.forEach(car => car.advance());
  }

  initCars() {
    this.cars = [];
  }
}

new RacingCarGame();
