import { $ } from './utils.js';
import { ERROR_MESSAGE } from './constants.js';

export default class CarRacingGame {
  constructor() {
    this.initElements();
    this.hideRacingCountForm();
    this.$carNamesSubmit.addEventListener('click', (e) => this.handleCarNamesSubmit(e));
    this.$racingCountSubmit.addEventListener('click', (e) =>
      this.handleRacingCountSubmit(e)
    );
  }
  initElements = () => {
    this.$carNamesInput = $('#car-names-input');
    this.$carNamesSubmit = $('#car-names-submit');
    this.$racingCountFormTitle = $('#racing-count-form-title');
    this.$racingCountForm = $('#racing-count-form');
    this.$racingCountInput = $('#racing-count-input');
    this.$racingCountSubmit = $('#racing-count-submit');
  };

  hideRacingCountForm = () => {
    this.$racingCountFormTitle.style.display = 'none';
    this.$racingCountForm.style.display = 'none';
  };

  handleCarNamesSubmit = (e) => {
    e.preventDefault();
    const currentInput = this.$carNamesInput.value;
    const isValid = this.validateNames(currentInput);
    if (!isValid) {
      this.alertErrorMessage();
    }
    if (isValid) {
      this.showRacingCountForm();
    }
  };

  validateNames = (currentInput) => {
    const names = currentInput.split(',').map((item) => item.trim());
    if (names.length === 1) {
      return false;
    }
    for (let i = 0; i < names.length; i++) {
      if (names[i].length === 0 || names[i].length > 5) {
        return false;
      }
    }
    return true;
  };

  alertErrorMessage = () => {
    this.$carNamesInput.value = '';
    alert(ERROR_MESSAGE);
    this.$carNamesInput.focus();
  };

  showRacingCountForm = () => {
    this.$racingCountFormTitle.style.display = 'block';
    this.$racingCountForm.style.display = 'block';
  };

  handleRacingCountSubmit = (e) => {
    e.preventDefault();
  };
}
new CarRacingGame();
