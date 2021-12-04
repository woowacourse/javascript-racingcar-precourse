import {
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  MOVE_CONDITION_NUMBER,
} from './constants/constant.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.move = '';
  }

  doRacing() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      MIN_RANDOM_NUMBER,
      MAX_RANDOM_NUMBER,
    );
    if (randomNumber >= MOVE_CONDITION_NUMBER) {
      this.move += '-';
    }
  }

  getDestination() {
    return this.move.length;
  }
}
