import { getRandNumberRangeOf } from "./utils.js";

export default class Car {
  name;
  position = 0;

  constructor(name) {
    this.name = name;
  }

  move() {
    const n = getRandNumberRangeOf(0, 10);
    if (n >= 4) {
      this.#moveForward();
    }
  }

  #moveForward() {
    this.position++;
  }

  status() {
    return `${this.name} : ${"-".repeat(this.position)}\n`;
  }
}
