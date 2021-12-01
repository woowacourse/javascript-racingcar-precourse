export default class GameModel {
  constructor() {
    this.carNames = [];
    this.racingCount = [];
    this.eachRacingRecord = {};
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
}
