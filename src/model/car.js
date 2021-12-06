import { $racingStatus } from "../common/constants.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  printPosition() {
    let bar = "";
    for (let i = 0; i < this.position; i += 1) {
      bar += "-";
    }
    $racingStatus.innerHTML += `${this.name}: ${bar}<br>`;
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
