import {
  MIN_ELEM_COUNTS,
  MIN_ELEM_LENGTH,
  MAX_ELEM_LENGTH,
  NAME_ALERT_MESSAGE,
} from "./constants.js";

export default class Util {
  checkValidation = value => {
    let isValidate = false;

    if (typeof value === "string") {
      isValidate = this.checkString(value);
    }
    if (typeof value === "number") {
      isValidate = this.checkNumber(value);
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

  alertMessage(node) {
    let message = "";

    if (node.id === "car-names-input") {
      message = NAME_ALERT_MESSAGE;
    }
    alert(message);
  }
}
