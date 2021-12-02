import { CAR_NAME_MAX_LENGTH, RACING_COUNT_RANGE } from '../constants/index.js';
import Line from '../models/line.js';

class GameController {
  #lines;

  #racingCount;

  constructor(cars, racingCount) {
    this.#lines = cars.map((car) => new Line(car));
    this.#racingCount = racingCount;
  }

  get lines() {
    return this.#lines;
  }

  get racingCount() {
    return this.#racingCount;
  }

  static isCarNamesValidLength(cars) {
    return cars.map(
      (car) => car.name.length > 0 && car.name.length <= CAR_NAME_MAX_LENGTH
    );
  }

  static isCarNamesUnique(cars) {
    const names = cars.map((car) => car.name);
    const hasUniqueNames = names.length === new Set(names).size;
    return hasUniqueNames;
  }

  static isRacingCountInValidRange(racingCount) {
    return (
      racingCount >= RACING_COUNT_RANGE.min &&
      racingCount <= RACING_COUNT_RANGE.max
    );
  }
}

export default GameController;
