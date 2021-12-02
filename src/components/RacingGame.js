import Car from './Car.js';

export default class RacingGame {
  constructor() {
    this.racingCars = [];
  }

  static initialCars(carNames) {
    this.racingCars = carNames.map(name => new Car(name));
  }

  static gameStart() {}
}
