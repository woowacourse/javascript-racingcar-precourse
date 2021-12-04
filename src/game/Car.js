export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  go() {
    if (window.MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.position += 1;
    }
  }
}
