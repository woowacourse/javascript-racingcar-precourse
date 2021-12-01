export default class GameModel {
  constructor() {
    this.carNames = [];
    this.racingCount = [];
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
