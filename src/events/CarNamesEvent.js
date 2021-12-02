import { DOM } from '../constant/constant.js';

export default class CarNamesEvent {
  constructor() {
    this.$carNamesInput = DOM.carNamesInput;
    this.$carNamesSubmit = DOM.carNamesSubmit;
    this.carNames = '';
  }

  isBlank = () => {
    for (let i = 0; i < this.carNames.length; i += 1) {
      const carNamesText = this.carNames[i];

      if (carNamesText === ' ') {
        return false;
      }
    }

    return true;
  };

  isEmpty = () => {
    if (this.carNames.length === 0) {
      return false;
    }

    return true;
  };

  validateNames = () => {
    this.isEmpty() && this.isBlank();
  };

  onClickSubmit = () => {
    this.$carNamesSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.carNames = this.$carNamesInput.value;
      this.validateNames();
    });
  };
}
