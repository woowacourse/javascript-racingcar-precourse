import {getRandomNumbers, splitAndTrim, prefixSumReducer} from './util.js';
import {isValidCarNames, isValidRacingCount} from './input-validator.js';
import {alertCarName, alertRacingCount} from './input-alert.js';
import EventListener from './event-listener.js';
import Car from './car.js';


export default class RacingCarGame {
  #cars
  #racingCount

  constructor() {
    new EventListener(this);

    this.#cars = [];
    this.#racingCount = 0;
  }

  start() {
    this.#cars.forEach((car) => {
      car.moveCount = Array
          .from(
              {length: this.#racingCount},
              () => this.#isForward(getRandomNumbers(0, 9)),
          )
          .reduce(prefixSumReducer, []);
    });
  }

  set cars(carNames) {
    carNames = splitAndTrim(carNames, ',');

    if (!isValidCarNames(carNames)) return alertCarName(carNames);

    this.#cars = carNames.map(carName => new Car(carName));
  }

  get cars() {
    return this.#cars;
  }

  set racingCount(racingCount) {
    if (!isValidRacingCount(racingCount)) return alertRacingCount(racingCount);

    this.#racingCount = racingCount;
  }

  get racingCount() {
    return this.#racingCount;
  }

  #isForward(randomNumber) {
    if (randomNumber >= 4) return 1;

    return 0;
  }
}

new RacingCarGame();
