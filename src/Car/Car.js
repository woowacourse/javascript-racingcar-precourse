export default class Car {
  constructor(name) {
    this.carName = name;
    this.forwardCnt = 0;
  }

  get name() {
    return this.carName;
  }

  get distance() {
    return this.distance;
  }

  move = () => {
    if (this.isCarMoving()) {
      this.forwardCnt += 1;
    }
  };

  isCarMoving = () => {
    return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
  };
}
