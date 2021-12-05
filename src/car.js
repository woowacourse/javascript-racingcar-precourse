import { CAR_RULES } from './constant';

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
        CAR_RULES.minNumber,
        CAR_RULES.maxNumber,
      ) >= CAR_RULES.goStandard
    ) {
      this.forward += 1;
    }
  }
}
