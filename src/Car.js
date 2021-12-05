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
    this.racingResult = { name: this.name, progress: "" };
  }

  getRacingResult() {
    return this.racingResult;
  }

  saveRoundResult(isGoFoward) {
    if (isGoFoward) {
      this.racingResult.progress += "-";
    }
  }
}
