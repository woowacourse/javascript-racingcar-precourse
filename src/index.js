import {
  $,
  alertError,
  hideRacingCountForm,
  revealRacingCountForm,
  validateNames,
  validateCount,
  createCars,
  createRacingResultArea,
  proceedRacingStage,
  getWinners,
  paintWinners,
} from './utils.js';
import { ERROR_MESSAGE } from './constants.js';

class CarRacingGame {
  constructor() {
    this.initElements();
    hideRacingCountForm();
    this.$carNamesSubmit.addEventListener('click', (e) =>
      this.handleCarNamesSubmit(e)
    );
    this.$racingCountSubmit.addEventListener('click', (e) =>
      this.handleRacingCountSubmit(e)
    );
    this.cars = [];
  }

  initElements = () => {
    this.$carNamesInput = $('#car-names-input');
    this.$carNamesSubmit = $('#car-names-submit');
    this.$racingCountInput = $('#racing-count-input');
    this.$racingCountSubmit = $('#racing-count-submit');
  };

  handleCarNamesSubmit = (e) => {
    e.preventDefault();
    const currentInput = this.$carNamesInput.value;
    const names = currentInput.split(',').map((item) => item.trim());
    const isValid = validateNames(names);
    if (!isValid) {
      alertError(ERROR_MESSAGE.CAR_NAMES_FORM, this.$carNamesInput);
    }
    if (isValid) {
      this.cars = createCars(names);
      revealRacingCountForm();
    }
  };

  handleRacingCountSubmit = (e) => {
    e.preventDefault();
    const parsedInput = parseInt(this.$racingCountInput.value);
    const isValid = validateCount(parsedInput);
    if (!isValid) {
      alertError(ERROR_MESSAGE.RACING_COUNT_FORM, this.$racingCountInput);
    }
    if (isValid) {
      this.play(this.cars, parsedInput);
    }
  };

  play = (cars, racingCount) => {
    createRacingResultArea();
    for (let i = 0; i < racingCount; i++) {
      proceedRacingStage(cars);
    }
    const winners = getWinners(cars);
    paintWinners(winners);
  };
}

new CarRacingGame();
