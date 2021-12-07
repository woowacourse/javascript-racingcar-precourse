import { $racingStatus } from "../common/constants.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  printPosition() {
    $racingStatus.innerHTML += `${this.name}: ${"-".repeat(this.position)}<br>`;
  }

  makeRandom() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  judgeGoOrNot() {
    if (this.makeRandom() >= 4) {
      this.position += 1;
    }
  }
}
