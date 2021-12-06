import { CAR } from '../constants/constant.js';
import { createProgressNode } from '../utils/dom.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
    this.randomNumber = 0;
  }

  move() {
    if (this.randomNumber >= CAR.MOVE_NUMBER) {
      this.position += 1;
    }
  }

  rollDice() {
    this.randomNumber = MissionUtils.Random.pickNumberInRange(
      CAR.RANDOM_MINIMUM_NUMBER,
      CAR.RANDOM_MAXIMUM_NUMBER
    );
  }

  get positionElement() {
    return createProgressNode(this.name, this.position);
  }
}
