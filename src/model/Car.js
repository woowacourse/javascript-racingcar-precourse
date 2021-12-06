import { RANGE_THRESHOLD } from '../utils/constants.js';
import getRandomNumber from '../utils/getRandomNumber.js';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  getName() {
    return this.name;
  }

  getDistance() {
    return this.distance;
  }

  move() {
    if (getRandomNumber() >= RANGE_THRESHOLD) {
      this.distance += 1;
    }
  }
}

export default Car;
