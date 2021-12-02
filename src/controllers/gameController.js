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
}

export default GameController;
