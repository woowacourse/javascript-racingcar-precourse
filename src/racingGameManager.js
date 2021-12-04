import generateRandomNumber from './game/utils/generateRandomNumber.js';
import isMovable from './game/utils/isMovable.js';

export default class RacingGameManager {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
    this.winners = [];
  }

  getCars() {
    return this.cars;
  }

  getRacingCount() {
    return this.racingCount;
  }

  getWinners() {
    return this.winners;
  }

  setCars(cars) {
    this.cars = cars;
  }

  setRacingCount(racingCount) {
    this.racingCount = racingCount;
  }

  race() {
    this.cars.forEach((car) => {
      const randomNum = generateRandomNumber();
      if (isMovable(randomNum)) car.move();
    });
  }

  getMaxPosition() {
    return Math.max(...this.cars.map((car) => car.getPosition()));
  }

  getCarsByPosition(position) {
    return this.cars.filter((car) => car.getPosition() === position);
  }

  judgeWinners() {
    const maxPosition = this.getMaxPosition();
    const winners = this.getCarsByPosition(maxPosition).map((car) =>
      car.getName()
    );

    this.winners = winners;
  }
}
