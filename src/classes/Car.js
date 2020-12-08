import { NUMBER as NUM } from "../constants/constants.js";
import { getRandomNumber } from "../utils/random.js";

export class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  race() {
    this.distance +=
      getRandomNumber(NUM.RANDOM_START, NUM.RANDOM_END) >=
      NUM.GO_FORWARD_CONDITION
        ? go()
        : stop();
  }

  go() {
    return NUM.GO;
  }

  stop() {
    return NUM.STOP;
  }

  clear() {
    this.distance = 0;
  }
}
