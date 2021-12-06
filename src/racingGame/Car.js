import { NUMBER, RACING_COUNT } from "../constant/racing.js";

export default class Car {
  constructor(name) {
    this.name = name;
  }

  moving() {
    return this.getRandomNumber() >= RACING_COUNT.GO_FORWARD;
  }

  getRandomNumber() {
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
