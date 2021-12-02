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

  static isValidCars(cars) {
    const names = cars.map((car) => car.name);

    const isValidLength = names.map(
      (name) => name.length > 0 && name.length <= CAR_NAME_MAX_LENGTH
    );
    const hasUniqueNames = names.length === new Set(names).size;

    return isValidLength && hasUniqueNames;
  }

  static isValidRacingCount(racingCount) {
    const isInValidRange =
      racingCount >= RACING_COUNT_RANGE.min &&
      racingCount <= RACING_COUNT_RANGE.max;
    return isInValidRange;
  }
}

export default GameController;
