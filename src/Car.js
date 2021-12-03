import randomNumberInRange from './randomNumberInRange.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    const randomNumber = randomNumberInRange(0, 9);
    if (randomNumber > 4) {
      this.distance++;
    }
  }
}
