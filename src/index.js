import Car from './car.js';

export default class RacingCarGame {
  constructor() {
    this.carsArray = [];
  }

  getPlayingCarList(carNameListArray) {
    for (const carName of carNameListArray) {
      this.carsArray.push(new Car(carName));
    }
  }
}
