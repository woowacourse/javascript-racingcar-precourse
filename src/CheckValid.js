import { MESSAGE } from "./constant/alertMessage.js";
import { CAR_NAME } from "./constant/carName.js";
import { RACING_COUNT } from "./constant/racing.js";

export default class CheckValid {
  carNames(names) {
    if (!this.isSplitComma(names)) {
      return false;
    }
    const namesArray = this.removeSpace(names);
    return (
      this.isValidLength(namesArray) &&
      this.isValidCarNames(namesArray) &&
      this.checkDuplicate(namesArray)
    );
  }

  racingCount(count) {
    const isValid = count > RACING_COUNT.MININUM;
    if (!isValid) {
      return alert(MESSAGE.INVALID_RACING_COUNT);
    }
    return isValid;
  }

  removeSpace(carNames) {
    return carNames.split(",").map(name => name.replace(/\s*/g, ""));
  }

  isSplitComma(carNames) {
    const includesComma = [...carNames].includes(",");
    if (!includesComma) {
      return alert(MESSAGE.COMMA);
    }
    return carNames.split(",");
  }

  isValidLength(carNames) {
    const isValidLength = carNames.every(
      name => name.length > CAR_NAME.MININUM && name.length <= CAR_NAME.LENGTH
    );
    if (!isValidLength) {
      return alert(MESSAGE.INVALID_CAR_LENGTH);
    }
    return isValidLength;
  }

  isValidCarNames(carNames) {
    const invalidValue = carNames.some(name => /[^A-Za-z가-힇]/g.test(name));
    if (invalidValue) {
      return alert(MESSAGE.INVALID_CAR_NAME);
    }
    return true;
  }

  checkDuplicate(carNames) {
    const removeDulicate = new Set([...carNames]);
    if (removeDulicate.size !== carNames.length) {
      return alert(MESSAGE.DUPLICATE_CAR_NAME);
    }
    return true;
  }
}
