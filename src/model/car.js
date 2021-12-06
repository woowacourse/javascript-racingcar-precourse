import NUMBER from '../constants/number.js';

export default class Car {
  constructor(name) {
    this.validateName(name);

    this.name = name;
    this.position = 0;
  }

  move() {
    if (this.isBiggerThanGivenNum(NUMBER.MOVE_LEAST_CONDITION)) {
      this.position += 1;
    }
  }

  isBiggerThanGivenNum(givenNum) {
    return MissionUtils.Random.pickNumberInRange(0, 9) >= givenNum;
  }

  validateName(name) {
    if (name.length >= 5) {
      throw Error('자동차 이름은 5자이하여야합니다!');
    }
  }
}
