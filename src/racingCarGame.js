import { getRandomNum } from './utils/getRandomNum.js';
import { CONSTRAINTS, CONSTANTS } from './utils/constants.js';

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
    this.gameResult = [];
  }

  setCars(cars) {
    this.cars = cars;
  }

  setRacingCount(racingCount) {
    this.racingCount = racingCount;
  }

  saveGameResult() {
    const roundScore = {};

    this.cars.forEach(car => {
      roundScore[car.name] = car.score;
    });

    this.gameResult.push(roundScore);
  }

  runRound() {
    this.cars.forEach(car => {
      const randomNum = getRandomNum(CONSTRAINTS.MIN_OF_RANGE, CONSTRAINTS.MAX_OF_RANGE);

      if (randomNum >= CONSTANTS.MOVING_POINT) {
        car.moveForward();
      }
    });
  }

  play() {
    let round = 1;

    while (round <= this.racingCount) {
      this.runRound();
      this.saveGameResult();
      round += 1;
    }
  }
}
