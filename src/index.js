import {
  ELEMENT_IDS,
  RANDOM_NUM_RANGE,
  MIN_NUM_TO_GO,
} from "./constants.js";
import Validator from "./validator.js";
import Car from "./car.js";

class RacingGame {
  constructor() {
    const { CAR_NAMES_INPUT, CAR_NAMES_SUBMIT, RACING_COUNT_INPUT, RACING_COUNT_SUBMIT } = ELEMENT_IDS;
    this.$carNamesInput = document.querySelector(`#${CAR_NAMES_INPUT}`);
    this.$carNamesSubmit = document.querySelector(`#${CAR_NAMES_SUBMIT}`);
    this.$carNamesSubmit.addEventListener('click', () => this.handleSubmitCarNames());

    this.$racingCountInput = document.querySelector(`#${RACING_COUNT_INPUT}`);
    this.$racingCountSubmit = document.querySelector(`#${RACING_COUNT_SUBMIT}`);
    this.$racingCountSubmit.addEventListener('click', () => this.handleSubmitRacingCount());
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
    this.carNames = carNames;
  }
  handleSubmitRacingCount() {
    const racingCount = this.$racingCountInput.value;
    const { isValid, message } = Validator.isValidRacingCount(racingCount);
    if (!isValid) {
      alert(message);
      return;
    }
    this.racingCount = parseInt(racingCount, 10);
    this.play();
  }
  moveCars() {
    const [MIN, MAX] = RANDOM_NUM_RANGE;
    this.cars.forEach((car) => {
      const randomNum = MissionUtils.Random.pickNumberInRange(MIN, MAX);
      car.shouldGo(randomNum) && car.go();
    });
  }
  play() {
    this.cars = this.createCars(this.carNames.split(','));
    for(let i = 0; i < this.racingCount; i++) {
      this.moveCars();
    }
  }
}

new RacingGame();