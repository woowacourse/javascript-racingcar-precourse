import {
  MAX_OF_RANDOM,
  MIN_OF_RANDOM,
  MOVE_CONDITION_NUMBER,
} from './constants/index.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  play() {
    const random = MissionUtils.Random.pickNumberInRange(MIN_OF_RANDOM, MAX_OF_RANDOM);
    if (random >= MOVE_CONDITION_NUMBER) this.step += 1;
  }

  state() {
    return `${this.name}: ${'-'.repeat(this.step)}`;
  }
}
