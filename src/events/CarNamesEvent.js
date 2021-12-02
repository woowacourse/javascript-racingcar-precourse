import { DOM } from '../constant/constant.js';

export default class CarNamesEvent {
  constructor() {
    this.$carNamesInput = DOM.carNamesInput;
    this.$carNamesSubmit = DOM.carNamesSubmit;
    this.carNames = '';
  }

  isDuplicate = () => {
    const carNamesList = this.carNames.split(',');
    let noDuplicate = true;

    carNamesList.reduce((prev, curr) => {
      if (prev === curr) {
        noDuplicate = false;
      }

      return curr;
    }, '');

    return noDuplicate;
  };

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
    this.isEmpty() && this.isBlank() && this.isDuplicate();
  };

  onClickSubmit = () => {
    this.$carNamesSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.carNames = this.$carNamesInput.value;
      this.validateNames();
    });
  };
}
