import { RANDOM_NUM_RANGE, MIN_NUM_TO_GO, ERROR_MESSAGE } from './constants.js';
import Validator from './validator.js';
import Car from './car.js';
import RacingView from './view.js';

class RacingGame {
  constructor() {
    this.view = new RacingView();
    this.registerEventListeners();
  }

  registerEventListeners() {
    this.view.$carNamesSubmit.addEventListener('click', (e) => {
      this.handleSubmitCarNames(e);
    });
    this.view.$racingCountSubmit.addEventListener('click', (e) => {
      this.handleSubmitRacingCount(e);
    });
  }

  handleSubmitCarNames(e) {
    e.preventDefault();
    const carNames = this.view.$carNamesInput.value;
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
    const racingCount = this.view.$racingCountInput.value;
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

  play() {
    const { view } = this;
    view.resetResultView();
    this.cars = this.createCars();
    for (let i = 0; i < this.racingCount; i += 1) {
      this.moveCars();
      view.printCurrentPosition(this.cars);
    }
    const winners = this.findWinners();
    view.printWinners(winners);
  }
}

new RacingGame(); // eslint-disable-line no-new
