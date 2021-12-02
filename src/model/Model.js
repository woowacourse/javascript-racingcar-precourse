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

  updateRacingCount(racingCount) {
    this.racingCount = racingCount;
  }

  race() {
    return this.carList.map((car) => car.race());
  }

  getRaceResult() {
    const raceResultList = [];

    for (let idx = 0; idx < this.racingCount; idx += 1) {
      const raceResult = this.race();

      raceResultList.push(raceResult);
    }

    return raceResultList;
  }

  getFinalWinnerNameList() {
    const maxDistance = Math.max(...this.carList.map((car) => car.distance));
    return this.carList
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);
  }

  initDistance() {
    this.carList.forEach((car) => car.init());
  }

  startRace(callback) {
    this.initDistance();
    const raceResultList = this.getRaceResult();
    const finalWinnerNameList = this.getFinalWinnerNameList();

    callback({ raceResultList, finalWinnerNameList });
  }
}
