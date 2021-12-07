import {
  $racingStatus,
  MIN_RANDOM,
  MAX_RANDOM,
  RANDOM_POINT,
} from "../common/constants.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  printPosition() {
    $racingStatus.innerHTML += `${this.name}: ${"-".repeat(this.position)}<br>`;
  }

  makeRandom() {
    return MissionUtils.Random.pickNumberInRange(MIN_RANDOM, MAX_RANDOM);
  }

  judgeGoOrNot() {
    if (this.makeRandom() >= RANDOM_POINT) {
      this.position += 1;
    }
  }
}
