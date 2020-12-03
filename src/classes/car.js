import {
  ADVANCE_STANDARD,
  ADVANCE_DECIDE_NUMBER_RANGE,
} from '../constants/configuration.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.progress = 0;
  }

  tryAdvance() {
    let randomNumber = Math.random() * ADVANCE_DECIDE_NUMBER_RANGE;
    randomNumber = Math.round(randomNumber);
    if (randomNumber >= ADVANCE_STANDARD) {
      this.progress += 1;
    }
  }
}
