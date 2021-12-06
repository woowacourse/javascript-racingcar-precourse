import {
  ELEMENT_IDS,
  RANDOM_NUM_RANGE,
  MIN_NUM_TO_GO,
  WINNER_LABEL,
  ERROR_MESSAGE,
} from './constants.js';
import Validator from './validator.js';
import Car from './car.js';
import htmlToElement from './utils.js';

class RacingGame {
  constructor() {
    this.bindCarNamesElements();
    this.bindRacingCountElements();
    this.registerEventListeners();

    const $app = document.querySelector(`#${ELEMENT_IDS.APP}`);
    this.insertRaceResultView($app);
  }

  bindCarNamesElements() {
    const { CAR_NAMES_INPUT, CAR_NAMES_SUBMIT } = ELEMENT_IDS;
    this.$carNamesInput = document.querySelector(`#${CAR_NAMES_INPUT}`);
    this.$carNamesSubmit = document.querySelector(`#${CAR_NAMES_SUBMIT}`);
  }

  bindRacingCountElements() {
    const { RACING_COUNT_INPUT, RACING_COUNT_SUBMIT } = ELEMENT_IDS;
    this.$racingCountInput = document.querySelector(`#${RACING_COUNT_INPUT}`);
    this.$racingCountSubmit = document.querySelector(`#${RACING_COUNT_SUBMIT}`);
  }

  registerEventListeners() {
    this.$carNamesSubmit.addEventListener('click', (e) =>
      this.handleSubmitCarNames(e)
    );
    this.$racingCountSubmit.addEventListener('click', (e) =>
      this.handleSubmitRacingCount(e)
    );
  }

  insertRaceResultView($app) {
    this.insertRacingScreen($app);
    this.insertRacingWinner($app);
  }

  insertRacingScreen($app) {
    const screen = htmlToElement(
      `<div id="${ELEMENT_IDS.RACING_SCREEN}"></div>`
    );
    $app.insertAdjacentElement('beforeend', screen);
    this.$racingScreen = screen;
  }

  insertRacingWinner($app) {
    const element = htmlToElement(
      `<span id="${ELEMENT_IDS.RACING_WINNERS}"></span>`
    );
    $app.insertAdjacentElement('beforeend', element);
    this.$racingWinners = element;
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

  createCars() {
    const carNameArr = this.carNames.split(',');
    return carNameArr.map((name) => new Car(name));
  }

  moveCars() {
    const [MIN, MAX] = RANDOM_NUM_RANGE;
    this.cars.forEach((car) => {
      /* eslint-disable no-undef */
      const randomNum = MissionUtils.Random.pickNumberInRange(MIN, MAX);
      if (randomNum >= MIN_NUM_TO_GO) {
        car.go();
      }
    });
  }

  findWinners() {
    this.cars.sort((left, right) => (left.position > right.position ? -1 : 1));
    const maxPosition = this.cars[0].position;
    return this.cars.reduce((acc, cur) => {
      if (cur.position === maxPosition) {
        acc.push(cur.name);
      }
      return acc;
    }, []);
  }

  printCurrentPosition() {
    let ul = '<ul>';
    this.cars.forEach((car) => {
      ul += `<li>${car.name}: ${'-'.repeat(car.position)}</li>`;
    });
    ul += '</ul>';
    this.$racingScreen.insertAdjacentElement('beforeend', htmlToElement(ul));
  }

  printWinners() {
    const winners = this.findWinners();
    this.$racingWinners.insertAdjacentElement(
      'beforebegin',
      htmlToElement(`<label>${WINNER_LABEL}: </label>`)
    );
    this.$racingWinners.innerText = `${winners.join(',')}`;
  }

  resetResultView() {
    this.$racingScreen.replaceChildren();
    if (this.$racingWinners.previousSibling.nodeName === 'LABEL') {
      this.$racingWinners.previousSibling.remove();
    }
    this.$racingWinners.replaceChildren();
  }

  play() {
    this.resetResultView();
    this.cars = this.createCars();
    for (let i = 0; i < this.racingCount; i += 1) {
      this.moveCars();
      this.printCurrentPosition();
    }
    this.printWinners();
  }
}

new RacingGame(); // eslint-disable-line no-new
