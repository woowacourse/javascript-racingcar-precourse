import { $status } from "../common/constants";

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  printPosition() {
    const bar = "";
    for (let i = 0; i < this.position; i += 1) {
      bar += "-";
    }
    $status.innerHTML = `${this.name}: ${bar}<br>`;
  }

  makeRandom() {}

  judgeGoOrNot() {}
}
