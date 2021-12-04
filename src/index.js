import {
  ELEMENT_IDS,
} from "./constants.js";
import Validator from "./validator.js";
import Car from "./car.js";

class RacingGame {
  constructor() {
    const { CAR_NAMES_INPUT, CAR_NAMES_SUBMIT } = ELEMENT_IDS;
    this.$carNamesInput = document.querySelector(`#${CAR_NAMES_INPUT}`);
    this.$carNamesSubmit = document.querySelector(`#${CAR_NAMES_SUBMIT}`);
    this.$carNamesSubmit.addEventListener('click', () => this.handleSubmitCarNames());
    this.cars = [];
  }
  createCars(carNameArr) {
    return carNameArr.map((name) => {
      return new Car(name);
    });
  }
  handleSubmitCarNames() {
    const carNames = this.$carNamesInput.value;
    const { isValid, message } = Validator.isValidCarNames(carNames);
    if (!isValid) {
      alert(message);
      return;
    }
    const validCarArr = carNames.split(',');
    this.cars = this.createCars(validCarArr);
  }
}

new RacingGame();