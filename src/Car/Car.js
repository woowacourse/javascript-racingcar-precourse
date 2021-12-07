import { CAR_MOVE_RANGE } from "../util/constant.js";

export default class Car {
  constructor(name) {
    this.carName = name;
    this.distance = 0;
  }

  getName = () => {
    return this.carName;
  };

  getDistance = () => {
    return this.distance;
  };

  reset = () => {
    this.distance = 0;
  };

  move = () => {
    if (this.isCarMoving()) {
      this.distance += 1;
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
