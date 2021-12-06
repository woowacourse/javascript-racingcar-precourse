import selectWinners from '../utils/car-utils.js';

export default class RacingGame {
  constructor(cars, round) {
    this.cars = cars;
    this.round = round;
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
