import { CAR_MOVE_RANGE } from "../util/constant.js";

export default class Car {
  constructor(name) {
    this.carName = name;
    this.forwardCnt = 0;
  }

  get name() {
    return this.carName;
  }

  get distance() {
    return this.forwardCnt;
  }

  reset = () => {
    this.forwardCnt = 0;
  };

  move = () => {
    if (this.isCarMoving()) {
      this.forwardCnt += 1;
    }
  };

  isCarMoving = () => {
    return (
      MissionUtils.Random.pickNumberInRange(
        CAR_MOVE_RANGE.MIN,
        CAR_MOVE_RANGE.MAX
      ) >= CAR_MOVE_RANGE.POINT
    );
  };
}
