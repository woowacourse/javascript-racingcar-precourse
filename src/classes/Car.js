import { getRandomNumber, getForwardSteps } from "../utils/gameUtil.js";

class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  go() {
    this.step += getForwardSteps(getRandomNumber());
  }
}

export default Car;
