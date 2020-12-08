import { randomNumber } from '../../../utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.moveForwardDistance = 0;
    this.MAX_NUMBER = 9;
    this.MIN_NUMBER = 0;
    this.STANDARD_NUMBER = 3;
  }

  moveForward() {
    if (randomNumber(this.MAX_NUMBER, this.MIN_NUMBER) > this.STANDARD_NUMBER) {
      this.moveForwardDistance++;
    }
  }
}
