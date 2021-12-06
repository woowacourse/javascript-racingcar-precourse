import {
  ELEMENT_IDS,
  RANDOM_NUM_RANGE,
  WINNER_LABEL,
  ERROR_MESSAGE,
} from "./constants.js";
import Validator from "./validator.js";
import Car from "./car.js";
import { htmlToElement } from "./utils.js";

class RacingGame {
  constructor() {
    const { CAR_NAMES_INPUT, CAR_NAMES_SUBMIT, RACING_COUNT_INPUT, RACING_COUNT_SUBMIT, APP } = ELEMENT_IDS;
    this.$carNamesInput = document.querySelector(`#${CAR_NAMES_INPUT}`);
    this.$carNamesSubmit = document.querySelector(`#${CAR_NAMES_SUBMIT}`);
    this.$carNamesSubmit.addEventListener('click', (e) => this.handleSubmitCarNames(e));

    this.$racingCountInput = document.querySelector(`#${RACING_COUNT_INPUT}`);
    this.$racingCountSubmit = document.querySelector(`#${RACING_COUNT_SUBMIT}`);
    this.$racingCountSubmit.addEventListener('click', (e) => this.handleSubmitRacingCount(e));

    this.$app = document.querySelector(`#${APP}`);
    this.insertRacingScreen(this.$app);
    this.insertRacingWinner(this.$app);
  }
  insertRacingScreen($app) {
    const screen = htmlToElement(`<div id="${ELEMENT_IDS.RACING_SCREEN}"></div>`);
    $app.insertAdjacentElement('beforeend', screen);
    this.$racingScreen = screen;
  }
  insertRacingWinner($app) {
    const element = htmlToElement(`<span id="${ELEMENT_IDS.RACING_WINNERS}"></span>`);
    $app.insertAdjacentElement('beforeend', element);
    this.$racingWinners = element;
  }
  createCars(carNameArr) {
    return carNameArr.map((name) => {
      return new Car(name);
    });
  }
  handleSubmitCarNames(e) {
    e.preventDefault();
    const carNames = this.$carNamesInput.value;
    const { isValid, message } = Validator.isValidCarNames(carNames);
    if (!isValid) {
      alert(message);
      return;
    }
    this.carNames = carNames;
  }
  handleSubmitRacingCount(e) {
    e.preventDefault();
    if (!this.carNames) {
      alert(ERROR_MESSAGE.EMPTY_CAR_NAMES);
      return;
    }
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
  findWinners() {
    this.cars.sort((left, right) => {
      return (left.position > right.position) ? -1 : 1;
    });
    let maxPosition = -1;
    return this.cars.reduce((acc, cur) => {
      if (cur.position < maxPosition) {
        return acc;
      }
      maxPosition = cur.position;
      acc.push(cur.name);
      return acc;
    }, []);
  }
  printCurrentPosition() {
    let ul = `<ul>`;
    this.cars.forEach((car) => {
      ul += `<li>${car.name}: ${'-'.repeat(car.position)}</li>`;
    });
    ul += `</ul>`;
    this.$racingScreen.insertAdjacentElement('beforeend', htmlToElement(ul));
  }
  printWinners() {
    let winners = this.findWinners();
    this.$racingWinners.insertAdjacentElement('beforebegin', htmlToElement(`<label>${WINNER_LABEL}: </label>`));
    this.$racingWinners.innerText = `${winners.join(',')}`;
  }
  resetResultView() {
    this.$racingScreen.replaceChildren();
    this.$racingWinners.replaceChildren();
  }
  play() {
    this.resetResultView();
    this.cars = this.createCars(this.carNames.split(','));
    for(let i = 0; i < this.racingCount; i++) {
      this.moveCars();
      this.printCurrentPosition();
    }
    this.printWinners();
  }
}

new RacingGame();