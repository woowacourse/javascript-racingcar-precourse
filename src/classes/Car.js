import { NUM } from '../constants/index.js';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = '';
  }

  advance() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      NUM.MIN_RANDOM,
      NUM.MAX_RANDOM
    );
    if (randomNumber >= NUM.ADVANCE) {
      this.distance += '-';
    }
  }
}

export default Car;
