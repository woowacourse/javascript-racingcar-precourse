import CarController from './controllers/Car.js';
import RacingCarNameForm from './components/RacingCarNameForm.js';
import RacingTryCountForm from './components/RacingTryCountForm.js';
import RacingResult from './components/RacingResult.js';
import RacingWinner from './components/RacingWinner.js';

class RacingCarGame {
  constructor() {
    this.$carController = new CarController();
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
    this.$carController.initCars();

    const splittedCarNames = this.$racingCarNameForm.getSplittedCarNames();
    if (!this.$racingCarNameForm.validateCarNames(splittedCarNames)) return;

    this.$carController.addCars(splittedCarNames);
    this.$racingTryCountForm.render();
    this.play();
  }

  onClickTryCountSubmitButton(event) {
    event.preventDefault();

    this.$racingTryCountForm.setTryCount();
    if (!this.$racingTryCountForm.validateTryCount()) return;

    this.play();
  }

  play() {
    if (!this.$racingTryCountForm.checkExistTryCount()) return;
    if (!this.$carController.checkExistCars()) return;
    this.$carController.resetCarsAdvance();
    this.$racingResult.initResults();

    for (let i = 0; i < this.$racingTryCountForm.getTryCount(); i += 1) {
      this.$carController.advanceCars();
      this.$racingResult.putBufferOneTryResults(this.$carController.getCars());
      this.$racingResult.render();
    }

    this.$racingWinner.checkWinners(this.$carController.getCars());
    this.$racingWinner.render();
  }
}

new RacingCarGame();
