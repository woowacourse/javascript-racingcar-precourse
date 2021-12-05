import { CAR } from '../constants/constant.js';
import { createProgressNode } from '../utils/dom.js';

export class Car {
  constructor(name) {
    this.name = name;
    this._position = 0;
    this.randomNumber;
  }

  move() {
    if (this.randomNumber >= CAR.MOVE_NUMBER) {
      this.position = this.position + 1;
    }
  }

  get position() {
    return this._position;
  }

  set position(newPosition) {
    this._position = newPosition;
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
