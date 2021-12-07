import {
  MAX_NUMBER_IN_RANGE,
  MIN_NUMBER_IN_RANGE,
  MOVE_THRESHOLD,
} from '../constant/game.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.numMove = 0;
  }

  getName() {
    return this.name;
  }

  getNumMove() {
    return this.numMove;
  }

  move() {
    if (Car.determineMove()) {
      this.numMove += 1;
    }
  }

  static determineMove() {
    const picked = MissionUtils.Random.pickNumberInRange(
      MIN_NUMBER_IN_RANGE,
      MAX_NUMBER_IN_RANGE
    );
    const canMove = picked >= MOVE_THRESHOLD;

    return canMove;
  }
}
