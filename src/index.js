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
    this.cars = [];

    hideRacingCountForm();

    $('#car-names-submit').addEventListener('click', (e) =>
      this.handleCarNamesSubmit(e)
    );
    $('#racing-count-submit').addEventListener('click', (e) =>
      this.handleRacingCountSubmit(e)
    );
  }

  handleCarNamesSubmit = (e) => {
    e.preventDefault();
    const $carNamesInput = $('#car-names-input');
    const currentInput = $carNamesInput.value;
    const names = currentInput.split(',').map((item) => item.trim());
    const isValid = validateNames(names);
    if (!isValid) {
      alertError(ERROR_MESSAGE.CAR_NAMES_FORM, $carNamesInput);
    }
    if (isValid) {
      this.cars = createCars(names);
      revealRacingCountForm();
    }
  };

  handleRacingCountSubmit = (e) => {
    e.preventDefault();
    const $racingCountInput = $('#racing-count-input');
    const parsedInput = parseInt($racingCountInput.value);
    const isValid = validateCount(parsedInput);
    if (!isValid) {
      alertError(ERROR_MESSAGE.RACING_COUNT_FORM, $racingCountInput);
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
