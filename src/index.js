import {
  ELEMENT_IDS,
} from "./constants.js";
import Validator from "./validator.js";
import Car from "./car.js";

class RacingGame {
  constructor() {
    const { CAR_NAMES_INPUT, CAR_NAMES_SUBMIT, RACING_COUNT_INPUT, RACING_COUNT_SUBMIT } = ELEMENT_IDS;
    this.$carNamesInput = document.querySelector(`#${CAR_NAMES_INPUT}`);
    this.$carNamesSubmit = document.querySelector(`#${CAR_NAMES_SUBMIT}`);
    this.$carNamesSubmit.addEventListener('click', () => this.handleSubmitCarNames());
    this.cars = [];

    this.$racingCountInput = document.querySelector(`#${RACING_COUNT_INPUT}`);
    this.$racingCountSubmit = document.querySelector(`#${RACING_COUNT_SUBMIT}`);
    this.$racingCountSubmit.addEventListener('click', () => this.handleSubmitRacingCount());
    this.racingCount = 0;
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
  handleSubmitRacingCount() {
    const racingCount = this.$racingCountInput.value;
  }
}

new RacingGame();