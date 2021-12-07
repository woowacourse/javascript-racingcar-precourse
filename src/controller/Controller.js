import CarNamesForm from './CarNamesForm.js';
import { validator } from '../validation/validator.js';

export default class Controller {
  constructor() {
    this.$input = document.getElementById('car-names-input');
    this.$submit = document.getElementById('car-names-submit');

    this.carNamesForm = new CarNamesForm(this.$input, this.$submit);

    this.carNames = [];

    this.bindCarNamesSubmitEvent();
  }

  alertError = message => {
    if (!message) {
      return false;
    }

    alert(message);
    this.carNamesForm.initValue();

    return true;
  };

  checkValidInput = () => {
    // car-names-input 유효성 검사
    return this.carNamesForm.validateInput();
  };

  checkValid = ([...carNames]) => {
    // 각 carName 유효성 검사
    for (const carName of carNames) {
      const message = validator.validate('carName', carName);

      if (message) {
        return message;
      }
    }
  };

  checkDuplicate = ([...carNames]) => {
    return validator.validate('carNames', carNames);
  };

  onClickCarNamesSubmit = event => {
    event.preventDefault();

    // car-names-input 유효성 검사
    const invalidInputMessage = this.checkValidInput();
    if (this.alertError(invalidInputMessage)) {
      return;
    }

    // 각 carName 유효성 검사
    const carNames = this.carNamesForm.getValue().split(',');
    const invalidCarNameMessage = this.checkValid(carNames);
    if (this.alertError(invalidCarNameMessage)) {
      return;
    }

    // carName 중복 유효성 검사
    const carNameDuplicatedMessage = this.checkDuplicate(carNames);
    if (this.alertError(carNameDuplicatedMessage)) {
      return;
    }

    this.carNames = carNames;
  };

  bindCarNamesSubmitEvent = () => {
    this.$submit.addEventListener('click', this.onClickCarNamesSubmit);
  };
}
