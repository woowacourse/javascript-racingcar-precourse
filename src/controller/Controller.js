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
    alert(message);
    this.carNamesForm.initValue();
  };

  splitCarNamesInput = delimeter =>
    this.carNamesForm.getValue().split(delimeter);

  validateCarNamesInput = () => {
    // car-names-input 유효성 검사
    const message = this.carNamesForm.validateInput();

    if (message) {
      this.alertError(message);
      return false;
    }

    return true;
  };

  validateCarName = ([...carNames]) => {
    // 각 carName 유효성 검사
    for (const carName of carNames) {
      const message = validator.validate('carName', carName);

      if (message) {
        this.alertError(message);
        return false;
      }
    }

    return true;
  };

  onClickCarNamesSubmit = event => {
    event.preventDefault();
    if (!this.validateCarNamesInput()) {
      return;
    }

    this.carNames = this.splitCarNamesInput(',');
    if (!this.validateCarName(this.carNames)) {
    }
  };

  bindCarNamesSubmitEvent = () => {
    this.$submit.addEventListener('click', this.onClickCarNamesSubmit);
  };
}
