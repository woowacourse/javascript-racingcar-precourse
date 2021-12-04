import { MESSAGE } from "./constant/alertMessage.js";
import { CAR_NAME, RACING_COUNT } from "./constant/number.js";

export default class CheckValid {
  carNames(names) {
    if (!this.isSplitComma(names)) {
      return false;
    }
    const namesArray = this.removeSpace(names);
    return this.isValidLength(namesArray) && this.isValidCarNames(namesArray);
  }

  racingCount(count) {
    const isValid = count > RACING_COUNT.MININUM;
    if (!isValid) {
      return alert(MESSAGE.INVALID_RACING_COUNT);
    }
    return isValid;
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
      return alert(MESSAGE.INVALID_CAR_LENGTH);
    }
    return isValidLength;
  }

  isValidCarNames(array) {
    const invalidValue = array.some(name => /[^A-Za-z가-힇]/g.test(name));
    if (invalidValue) {
      return alert(MESSAGE.INVALID_CAR_NAME);
    }
    return true;
  }
}
