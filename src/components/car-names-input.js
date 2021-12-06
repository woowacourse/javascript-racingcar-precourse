import { SELECTOR } from '../constants/constant.js';
import { validateCarNames } from '../utils/validation.js';

export default class CarNameInput {
  constructor(setCars) {
    this.$input = document.getElementById(SELECTOR.ID.CAR_NAMES_INPUT);
    this.$button = document.getElementById(SELECTOR.ID.CAR_NAMES_BUTTON);
    this.setCars = setCars;
    this.bindEvents();
  }

  bindEvents() {
    this.$button.addEventListener('click', this.submitCarName.bind(this));
  }

  submitCarName(event) {
    event.preventDefault();
    const carNamesArr = this.$input.value.split(',');
    const errorMessage = validateCarNames(carNamesArr);
    if (errorMessage) {
      return alert(errorMessage);
    }
    this.setCars(carNamesArr);
  }
}
