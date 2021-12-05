import Car from './components/Car.js';
import RacingCarNameForm from './components/RacingCarNameForm.js';
import RacingTryCountForm from './components/RacingTryCountForm.js';
import RacingResult from './components/RacingResult.js';
import RacingWinner from './components/RacingWinner.js';

class RacingCarGame {
  constructor() {
    this.$cars = [];
    this.$racingCarNameForm = new RacingCarNameForm();
    this.$racingTryCountForm = new RacingTryCountForm();
    this.$racingResult = new RacingResult();
    this.$racingWinner = new RacingWinner();
    this.initDOM();
    this.addEventListeners();
  }

  initDOM() {
    this.$racingResult.createDOM();
    this.$racingWinner.createDOM();
    this.$racingTryCountForm.hide();
    this.$racingResult.hide();
  }

  addEventListeners() {
    this.$racingCarNameForm.$submit.addEventListener(
      'click',
      this.onClickCarNameSubmitButton.bind(this),
    );
    this.$racingTryCountForm.$submit.addEventListener(
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
    this.$racingTryCountForm.render();
    this.play();
  }

  onClickTryCountSubmitButton(event) {
    event.preventDefault();

    this.$racingTryCountForm.getTryCount();
    if (!this.$racingTryCountForm.validateTryCount()) return;

    this.play();
  }

  play() {
    if (!this.$racingTryCountForm.checkExistTryCount()) return;
    if (!this.checkExistCars()) return;

    this.resetCarsAdvance();
    this.$racingResult.initResults();

    for (let i = 0; i < this.$racingTryCountForm.$tryCount; i += 1) {
      this.advanceCars();
      this.$racingResult.runOneTry(this.$cars);
      this.$racingResult.render();
    }

    this.$racingWinner.checkWinners(this.$cars);
    this.$racingWinner.render();
  }

  checkExistCars() {
    return this.$cars.length !== 0;
  }

  addCars(splittedCarNames) {
    splittedCarNames.forEach(carName => this.$cars.push(new Car(carName)));
  }

  resetCarsAdvance() {
    this.$cars.forEach(car => car.resetAdvance());
  }

  advanceCars() {
    this.$cars.forEach(car => car.advance());
  }

  initCars() {
    this.$cars = [];
  }
}

new RacingCarGame();
