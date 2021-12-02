import Car from './Car.js';

export default class Model {
  constructor() {
    this.carList = [];
    this.racingCount = 0;
  }

  createCarList(nameList, callback) {
    this.carList = nameList.map((name) => new Car(name));

    callback();
  }

  setRacingCount(racingCount) {
    this.racingCount = racingCount;
  }

  startRace(callback) {
    this.carList.forEach((car) => car.init());

    const raceResultList = [];

    for (let idx = 0; idx < this.racingCount; idx += 1) {
      const raceResult = this.carList.map((car) => car.race());

      raceResultList.push(raceResult);
    }

    const maxDistance = Math.max(...this.carList.map((car) => car.distance));
    const winnerNameList = this.carList
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);

    callback(raceResultList, winnerNameList);
  }
}
