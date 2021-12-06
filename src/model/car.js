export default class Car {
  constructor(name) {
    this.validateName(name);

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

  validateName(name) {
    if (name.length >= 5) {
      throw Error('자동차 이름은 5자이하여야합니다!');
    }
  }
}
