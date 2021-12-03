import { NUMBER_RANGE } from './constants.js';
import randomNumberInRange from './utils/randomNumberInRange.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    const randomNumber = randomNumberInRange(NUMBER_RANGE.min, NUMBER_RANGE.max);
    if (randomNumber > NUMBER_RANGE.boundary) {
      this.distance++;
    }
  }

  raceString() {
    let race = '';
    for (let i = 0; i < this.distance; i++) {
      race += '-';
    }

    return `${this.name}: ${race}`;
  }
}
