import Car from './Car.js';

export default class Model {
  constructor() {
    this.carList = [];
    this.racingCount = 0;
  }

  initCarList(nameList, callback) {
    this.carList = nameList.map((name) => new Car(name));

    callback();
  }

  initDistance() {
    this.carList.forEach((car) => car.init());
  }

  updateRacingCount(racingCount) {
    this.racingCount = racingCount;
  }

  getRaceResult() {
    return this.carList.map((car) => car.race());
  }

  getFullRaceResult() {
    const fullRaceResultList = [];

    for (let idx = 0; idx < this.racingCount; idx += 1) {
      fullRaceResultList.push(this.getRaceResult());
    }

    return fullRaceResultList;
  }

  getFinalWinnerNameList() {
    const maxDistance = Math.max(...this.carList.map((car) => car.distance));

    return this.carList
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);
  }

  startRace(callback) {
    this.initDistance();

    callback({
      raceResultList: this.getFullRaceResult(),
      finalWinnerNameList: this.getFinalWinnerNameList(),
    });
  }
}
