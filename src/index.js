import Car from './Car.js';

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.el = {
      carNamesForm: document.querySelector('#car-names-form'),
      carNamesInput: document.querySelector('#car-names-input'),
      carNamesSubmit: document.querySelector('#car-names-submit'),
    };
    this.setEventListener();
  }

  setEventListener() {
    this.el.carNamesForm.addEventListener(
      'submit',
      this.handleSubmitCarNames.bind(this),
    );
  }

  handleSubmitCarNames(e) {
    const validateInput = (data) => {
      return !data.some((item) => item.length > 0 && item.length > 5);
    };

    const disableForm = () => {
      this.el.carNamesInput.setAttribute('disabled', 'disabled');
      this.el.carNamesSubmit.setAttribute('disabled', 'disabled');
      this.el.carNamesForm.removeEventListener('submit', this.getCarNames);
    };

    e.preventDefault();

    if (this.cars.length > 0) {
      return;
    }

    const inputedData = this.el.carNamesInput.value.split(',');

    if (!validateInput(inputedData)) {
      return;
    }

    inputedData.forEach((item) => {
      this.cars.push(new Car(item));
    });

    disableForm();
  }
}

new RacingCarGame();
