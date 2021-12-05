import { FORWARD_RULES } from './constant.js';

export default class Car {
  constructor(name) {
    this.carName = name;
    this.forward = 0;
  }

  getCarName() {
    return this.carName;
  }

  getForward() {
    return this.forward;
  }

  goAndStop() {
    if (
      MissionUtils.Random.pickNumberInRange(
        FORWARD_RULES.minNum,
        FORWARD_RULES.maxNum,
      ) >= FORWARD_RULES.goStandard
    ) {
      this.forward += 1;
    }
  }
}
