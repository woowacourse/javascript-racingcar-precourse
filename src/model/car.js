export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (this.isBiggerThanThree()) {
      this.position += 1;
    }
  }

  isBiggerThanThree() {
    return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
  }
}
