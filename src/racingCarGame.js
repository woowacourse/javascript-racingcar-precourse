import RacingCar from './racingCar.js';

export default class RacingCarGame {
  constructor(carList = [], racingCount = 0) {
    this.carList = carList;
    this.racingCount = racingCount;
  }

  initCars(carNamesList) {
    this.carList = carNamesList.map(name => new RacingCar(name));
  }

  raceOneRound() {
    this.carList.forEach(car => {
      const movable = Math.random() * 9;
      if (movable >= 4) {
        car.move();
      }
    });
  }

  setCarList(carList) {
    this.carList = carList;
  }

  setRacingCount(racingCount) {
    this.racingCount = racingCount;
  }
}
