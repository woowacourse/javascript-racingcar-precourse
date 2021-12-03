import Car from './Car.js';

export default class Model {
  constructor() {
    this.carList = [];
    this.racingCount = 0;
  }

  static getWinnerNameList(raceResult) {
    const maxDistance = Math.max(...raceResult.map((car) => car.distance));

    return raceResult
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);
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

  startRace(callback) {
    this.initDistance();

    const fullRaceResult = this.getFullRaceResult();

    callback({
      raceResultList: fullRaceResult,
      finalWinnerNameList: Model.getWinnerNameList(
        fullRaceResult[fullRaceResult.length - 1]
      ),
    });
  }
}
