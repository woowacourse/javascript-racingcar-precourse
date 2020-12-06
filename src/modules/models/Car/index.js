import { isHigherThan } from '../../../utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.moveForwardDistance = 0;
    this.MAX_NUMBER = 9;
    this.MIN_NUMBER = 0;
    this.STANDARD_NUMBER = 3;
  }

  randomNumber() {
    const number = Math.floor(
      Math.random() * (this.MAX_NUMBER - this.MIN_NUMBER + 1) + this.MIN_NUMBER,
    );

    return number;
  }

  moveForward() {
    if (this.randomNumber() > this.STANDARD_NUMBER) {
      this.moveForwardDistance++;
    }
  }
}
