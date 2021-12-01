export default class CarModel {
  constructor() {
    this.carNames = [];
    this.racingCount = [];
    this.eachRacingRecord = {};
    this.isGameOver = false;
  }

  setCarNames(array) {
    this.carNames = array;
  }

  getCarNames() {
    return this.carNames;
  }

  setRacingCount(number) {
    this.racingCount = number;
  }

  getRacingCount() {
    return this.racingCount;
  }

  setEachRacingRecord(car, number) {
    this.eachRacingRecord[car] = number;
  }

  getEachRacingRecord(car) {
    return this.eachRacingRecord[car];
  }

  clearEachRacingRecord() {
    this.eachRacingRecord = {};
  }
}
