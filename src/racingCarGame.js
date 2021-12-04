export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
    this.gameResult;
  }

  setCars(cars) {
    this.cars = cars;
    console.log(this.cars)
  }

  setRacingCount(racingCount) {
    this.racingCount = racingCount;
    console.log(this.racingCount)
  }
}