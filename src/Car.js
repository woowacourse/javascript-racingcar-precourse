export default class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  isMove() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      this.move += 1;
    }
  }
}
