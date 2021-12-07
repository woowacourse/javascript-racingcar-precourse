import NUMBER from '../constants/number.js';
import MESSAGE from '../constants/message.js';
import { throwError } from '../utils/error.js';
import { isValidatedCarName } from './validator.js';

export default class Car {
  constructor(name) {
    this.validateName(name);

    this.name = name;
    this.position = 0;
  }

  move() {
    if (this.isBiggerThanGivenNum(NUMBER.MIN_DIGIT, NUMBER.MAX_DIGIT, NUMBER.MIN_MOVE_CONDITION)) {
      this.position += 1;
    }
  }

  isBiggerThanGivenNum(allowedMinDigit, allowedMaxDigit, givenNum) {
    // eslint-disable-next-line no-undef
    return MissionUtils.Random.pickNumberInRange(allowedMinDigit, allowedMaxDigit) >= givenNum;
  }

  validateName(name) {
    if (isValidatedCarName(name, NUMBER.MAX_CAR_NAME_LENGTH)) {
      return true;
    }

    throwError(MESSAGE.ERROR.NOT_MEET_CAR_NAME_CONDITION);
  }

  resetPosition() {
    this.position = 0;
  }
}
