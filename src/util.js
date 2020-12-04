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

    console.log(elems);
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

  checkElemCount = elems => elems.length >= 2;

  checkElemLength = elem => elem.length > 0 && elem.length <= 5;

  checkElemLetter = elem => {
    const rException = /[^a-z0-9]/i;
    let isValidate = true;

    if (rException.test(elem)) {
      isValidate = false;
    }

    return isValidate;
  };

  alertMessage(node) {
    alert("옳지 않은 값입니다.");
  }
}
