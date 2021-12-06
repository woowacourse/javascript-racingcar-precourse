import selectWinners from '../utils/car-utils.js';

export default class RacingGame {
  constructor() {
    this._cars;
    this._round;
  }

  set cars(cars) {
    this._cars = cars;
  }

  set round(round) {
    this._round = round;
  }

  get cars() {
    return this._cars;
  }

  get round() {
    return this._round;
  }

  moveCars() {
    this.cars.forEach((car) => {
      car.rollDice();
      car.move();
    });
    this.round -= 1;
  }

  get winners() {
    return selectWinners(this.cars);
  }
}
