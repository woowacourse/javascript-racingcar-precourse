/* global MissionUtils */

import {
  RANDOM_NUMBER_RANGE_MIN,
  RANDOM_NUMBER_RANGE_MAX,
  PROCEED_THRESHOLD,
} from '../config/config.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  init() {
    this.distance = 0;
  }

  race() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      RANDOM_NUMBER_RANGE_MIN,
      RANDOM_NUMBER_RANGE_MAX
    );

    if (randomNumber >= PROCEED_THRESHOLD) {
      this.distance += 1;
    }

    return { name: this.name, distance: this.distance };
  }
}
