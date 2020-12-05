import {
  EMPTY_STRING,
  MIN_ELEM_COUNTS,
  MIN_ELEM_LENGTH,
  MAX_ELEM_LENGTH,
  COMMON_ALERT_MESSAGE,
  NAME_ALERT_MESSAGE,
  COUNT_ALERT_MESSAGE,
  MOVE_TRIGGER,
  RANDOM_TRIGGER,
} from "./constants.js";

export default class Util {
  checkValidation = node => {
    let isValidate;

    if (node.id === "car-names-input") {
      isValidate = this.checkString(node.value);
    }
    if (node.id === "racing-count-input") {
      isValidate = this.checkNumber(Number(node.value));
    }

    return isValidate;
  };

  checkString = string => {
    const names = string.split(",");
    let isValidate = false;

    if (
      this.checkNameCount(names) &&
      names.every(this.checkNameLength) &&
      names.every(this.checkNameLetter) &&
      this.checkOverlap(names)
    ) {
      isValidate = true;
    }

    return isValidate;
  };

  checkNameCount = names => names.length >= MIN_ELEM_COUNTS;

  checkNameLength = name =>
    name.length >= MIN_ELEM_LENGTH && name.length <= MAX_ELEM_LENGTH;

  checkNameLetter = name => {
    const rException = /[^a-z0-9]/i;
    let isValidate = true;

    if (rException.test(name)) {
      isValidate = false;
    }

    return isValidate;
  };

  checkOverlap = names => {
    const hash = [];
    let isValidate = true;

    for (const name of names) {
      if (hash[name]) {
        isValidate = false;
        break;
      }
      hash[name] = true;
    }

    return isValidate;
  };

  checkNumber = number => {
    let isValidate = true;

    if (!(this.checkPositive(number) && this.checkInteger(number))) {
      isValidate = false;
    }

    return isValidate;
  };

  checkPositive = number => number > 0;

  checkInteger = number => number % 1 === 0;

  handleError = node => {
    node.value = EMPTY_STRING;
    this.alertMessage(node);
  };

  alertMessage(node) {
    let message = COMMON_ALERT_MESSAGE;

    if (node.id === "car-names-input") {
      message += NAME_ALERT_MESSAGE;
    }
    if (node.id === "racing-count-input") {
      message += COUNT_ALERT_MESSAGE;
    }
    alert(message);
  }

  getDistance() {
    const randomNumber = this.getRandomNumber();

    return randomNumber >= MOVE_TRIGGER ? 1 : 0;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * RANDOM_TRIGGER);
  }
}
