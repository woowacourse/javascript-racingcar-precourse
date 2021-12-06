import { CARRACING } from '../constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  play() {
    const random = MissionUtils.Random.pickNumberInRange(
      CARRACING.MIN_NUM,
      CARRACING.MAX_NUM,
    );
    if (random >= CARRACING.RANGE_MIN_NUM) {
      this.step += 1;
    }
  }

  stepResult() {
    return `${this.name}: ${'-'.repeat(this.step)}`;
  }
}
