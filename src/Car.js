import { NUMBER, RACING_COUNT } from "./constant/racing.js";

export default class Car {
  constructor(name) {
    this.name = name;
  }

  moving() {
    return this.getRandomValue() >= RACING_COUNT.GO_FORWARD;
  }

  getRandomValue() {
    return MissionUtils.Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
  }

  prepareRacing() {
    this.progress = "";
  }

  getRacingResult() {
    return { name: this.name, progress: this.progress };
  }

  updateProgress(isGoFoward) {
    if (isGoFoward) {
      this.progress += "-";
    }
  }
}
