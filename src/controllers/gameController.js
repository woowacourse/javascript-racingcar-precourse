import Line from '../models/line.js';

class GameController {
  #lines;

  constructor(cars) {
    this.#lines = cars.map((car) => new Line(car));
  }

  get lines() {
    return this.#lines;
  }
}

export default GameController;
