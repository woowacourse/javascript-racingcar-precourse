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

  onClickCarNamesSubmit = event => {
    event.preventDefault();

    const message = this._carNamesForm.validateInput();

    if (message) {
      this.alertError(message);
      this._carNamesForm.initValue();
    }
  };

  bindCarNamesSubmitEvent = () => {
    this.$submit.addEventListener('click', this.onClickSubmit);
  };
}
