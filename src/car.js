import {
  RANDOM_RANGE_MIN,
  RANDOM_RANGE_MAX,
  MOVE_CONDITION_NUMBER,
} from './const.js';

export class Car {
  constructor(name, location) {
    this.name = name;
    this.location = 0;
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(
      RANDOM_RANGE_MIN,
      RANDOM_RANGE_MAX,
    );
  }

  moveByOne() {
    this.location += 1;
  }

  Move() {
    if (this.getRandomNumber() >= MOVE_CONDITION_NUMBER) {
      this.moveByOne();
    }
  }
}
