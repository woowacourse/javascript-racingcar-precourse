import NUMBER from '../constants/number.js';

export default class Car {
  constructor(name) {
    this.validateName(name, NUMBER.MAX_CAR_NAME_LENGTH);

    this.name = name;
    this.position = 0;
  }

  move() {
    if (
      this.isBiggerThanGivenNum(
        NUMBER.MIN_DIGIT,
        NUMBER.MAX_DIGIT,
        NUMBER.MIN_MOVE_CONDITION
      )
    ) {
      this.position += 1;
    }
  }

  isBiggerThanGivenNum(allowedMinDigit, allowedMaxDigit, givenNum) {
    return (
      MissionUtils.Random.pickNumberInRange(allowedMinDigit, allowedMaxDigit) >=
      givenNum
    );
  }

  validateName(name, givenLength) {
    if (name.length >= givenLength) {
      throw Error('자동차 이름은 5자이하여야합니다!');
    }
  }
}
