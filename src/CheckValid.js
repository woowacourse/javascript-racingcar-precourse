import { MESSAGE } from "./constant/alertMessage.js";
import { CAR_NAME } from "./constant/number.js";

export default class CheckValid {
  carNames(names) {
    if (!this.isSplitComma(names)) {
      return false;
    }
    const namesArray = this.removeSpace(names);
    return this.isValidLength(namesArray) && this.isValidCarNames(namesArray);
  }

  removeSpace(string) {
    return string.split(",").map(name => name.replace(/\s*/g, ""));
  }

  isSplitComma(value) {
    const includesComma = [...value].includes(",");
    if (!includesComma) {
      return alert(MESSAGE.COMMA);
    }
    return value.split(",");
  }

  isValidLength(array) {
    const isValidLength = array.every(
      name => name.length > CAR_NAME.MININUM && name.length <= CAR_NAME.LENGTH
    );
    if (!isValidLength) {
      alert(MESSAGE.LENGTH);
    }
    return isValidLength;
  }

  isValidCarNames(array) {
    const isValidValue = array.every(name => /[A-Za-z가-힇]/g.test(name));
    if (!isValidValue) {
      alert(MESSAGE.CAR_NAME);
    }
    return isValidValue;
  }
}
