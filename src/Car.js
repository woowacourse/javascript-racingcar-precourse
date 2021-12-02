import { MOVE_CONDITION_NUMBER } from './constants/index.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  play() {
    const random = MissionUtils.Random.pickNumberInRange(0, 9);
    if (random >= MOVE_CONDITION_NUMBER) this.step += 1;
    console.log(this.name, random, this.step);
  }
}
