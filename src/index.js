import {
  $,
  alertError,
  hideRacingCountForm,
  showRacingCountForm,
  validateNames,
  validateCount,
} from './utils.js';
import { ERROR_MESSAGE } from './constants.js';

export default class CarRacingGame {
  constructor() {
    this.initElements();
    hideRacingCountForm();
    this.$carNamesSubmit.addEventListener('click', (e) => this.handleCarNamesSubmit(e));
    this.$racingCountSubmit.addEventListener('click', (e) =>
      this.handleRacingCountSubmit(e)
    );
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
    const isValid = validateNames(currentInput);
    if (!isValid) {
      alertError(ERROR_MESSAGE.CAR_NAMES_FORM, this.$carNamesInput);
    }
    if (isValid) {
      showRacingCountForm();
    }
  };

  handleRacingCountSubmit = (e) => {
    e.preventDefault();
    const parsedInput = parseInt(this.$racingCountInput.value);
    const isValid = validateCount(parsedInput);
    if (!isValid) {
      alertError(ERROR_MESSAGE.RACING_COUNT_FORM, this.$racingCountInput);
    }
  };
}
new CarRacingGame();
