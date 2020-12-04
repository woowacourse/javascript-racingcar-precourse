import {
  MIN_ELEM_COUNTS,
  MIN_ELEM_LENGTH,
  MAX_ELEM_LENGTH,
  COMMON_ALERT_MESSAGE,
  NAME_ALERT_MESSAGE,
  COUNT_ALERT_MESSAGE,
} from "./constants.js";

export default class Util {
  checkValidation = node => {
    let isValidate = false;

    if (node.id === "car-names-input") {
      isValidate = this.checkString(node.value);
    }
    if (node.id === "racing-count-input") {
      isValidate = this.checkNumber(node.value);
    }

    return isValidate;
  };

  checkString = string => {
    const elems = string.split(",");
    let isValidate = true;

    if (!this.checkElemCount(elems)) {
      isValidate = false;
    }
    if (!elems.every(this.checkElemLength)) {
      isValidate = false;
    }
    if (!elems.every(this.checkElemLetter)) {
      isValidate = false;
    }

    return isValidate;
  };

  checkElemCount = elems => elems.length >= MIN_ELEM_COUNTS;

  checkElemLength = elem =>
    elem.length >= MIN_ELEM_LENGTH && elem.length <= MAX_ELEM_LENGTH;

  checkElemLetter = elem => {
    const rException = /[^a-z0-9]/i;
    let isValidate = true;

    if (rException.test(elem)) {
      isValidate = false;
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
}
