import FormHandler from './FormHandler.js';
import { domId } from './share.js';

export default class CarNamesForm extends FormHandler {
  constructor(callback) {
    super(domId.carNamesInput, domId.carNamesSubmitBtn);
    this.setOnClick(callback);
  }

  checkValidName() {
    this.carNameSeparator();
    this.isValid = this.checkLength() && this.checkOverlap();
    return this.isValid;
  }

  carNameSeparator() {
    this.carNames = this.input.value
      .split(',')
      .map((carName) => carName.replace(' ', ''));
  }

  checkLength() {
    for (let i = 0; i < this.carNames.length; i += 1) {
      const carName = this.carNames[i];
      if (carName.length > 5) {
        return false;
      }
    }
    return true;
  }

  checkOverlap() {
    const carNamesSet = new Set(this.carNames);
    return carNamesSet.size === this.carNames.length;
  }
}
