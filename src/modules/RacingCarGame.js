import Car from "./Car.js";

export default class RacingCarGame {
  constructor(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.racingCars = {};
  }
}
