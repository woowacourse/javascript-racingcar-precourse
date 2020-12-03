import getRandomNumber from '../utils/random-number.js';

class Car {
  #drivenDistance;
  name;

  constructor(name) {
    this.name = name;
    this.#drivenDistance = 0;
  }

  drive() {
    const MIN = 0;
    const MAX = 9;
    const ADD_DISTANCE_STANDARD = 3;
    if (getRandomNumber(MIN, MAX) > ADD_DISTANCE_STANDARD) {
      this.#drivenDistance++;
    }
  }
}

export default Car;
