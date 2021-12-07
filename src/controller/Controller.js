import CarNamesForm from './CarNamesForm.js';

export default class Controller {
  constructor() {
    this.$input = document.getElementById('car-names-input');
    this.$submit = document.getElementById('car-names-submit');

    this.carNamesForm = new CarNamesForm(this.$input, this.$submit);

    this.bindCarNamesSubmitEvent();
  }

  alertError = message => {
    alert(message);
  };

  splitCarNamesInput = delimeter => {
    return this.carNamesForm.getValue().split(delimeter);
  };

  onClickCarNamesSubmit = event => {
    event.preventDefault();

    const message = this.carNamesForm.validateInput();

    if (message) {
      this.alertError(message);
      this.carNamesForm.initValue();
      return;
    }

    const carNames = this.splitCarNamesInput(',');
    console.log(carNames);
  };

  bindCarNamesSubmitEvent = () => {
    this.$submit.addEventListener('click', this.onClickCarNamesSubmit);
  };
}
