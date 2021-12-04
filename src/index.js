import { $ } from './utils.js';
import { ERROR_MESSAGE } from './constants.js';

export default class CarRacingGame {
  constructor() {
    this.$carNamesInput = $('#car-names-input');
    this.$carNamesSubmit = $('#car-names-submit');
    this.$carNamesSubmit.addEventListener('click', (e) => this.handleCarNamesSubmit(e));
  }

  handleCarNamesSubmit = (e) => {
    e.preventDefault();
    const currentInput = this.$carNamesInput.value;
    const isValid = this.validateNames(currentInput);
    if (!isValid) {
      this.alertErrorMessage();
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
}
new CarRacingGame();
