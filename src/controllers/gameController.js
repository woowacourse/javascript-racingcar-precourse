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
      (name) => name.length >= 1 && name.length < 10
    );
    const hasUniqueNames = names.length === new Set(names).size;
    return isValidLength && hasUniqueNames;
  }

  static isValidRacingCount(racingCount) {
    const isInValidRange = racingCount >= 1 && racingCount < 10;
    return isInValidRange;
  }
}

export default GameController;
