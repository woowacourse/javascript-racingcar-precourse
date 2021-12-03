import { ALERT_MESSAGE } from '../constants/index.js';

export default class Input {
  constructor() {
    this.carNamesArray = [];
    this.racingCount = 0;
  }

  setRacingCount(number) {
    this.racingCount = number;
  }

  isBlankExist(carNamesArray) {
    let isBlank = false;
    carNamesArray.forEach(x => {
      if (x === '' || x.includes(' ')) {
        isBlank = true;
      }
    });
    if (isBlank) {
      alert(ALERT_MESSAGE.blankExist);
    }

    return isBlank;
  }

  isLengthInRange(carNamesArray) {
    let isInRange = true;
    carNamesArray.forEach(x => {
      if (x.length > 5) {
        isInRange = false;
      }
    });
    if (!isInRange) {
      alert(ALERT_MESSAGE.lengthNotInRange);
    }

    return isInRange;
  }

  isNameDuplicated(carNamesArray) {
    const carNameSet = new Set(carNamesArray);
    const isDuplicated = carNameSet.size !== carNamesArray.length;

    if (isDuplicated) {
      alert(ALERT_MESSAGE.nameDuplicated);
    }

    return isDuplicated;
  }

  isCarNamesValid(carNamesInputValue) {
    const carNamesArray = carNamesInputValue.split(',');
    const isValid =
      !this.isBlankExist(carNamesArray) &&
      this.isLengthInRange(carNamesArray) &&
      !this.isNameDuplicated(carNamesArray);

    if (isValid) {
      this.carNamesArray = carNamesArray;
    }

    return isValid;
  }

  isNumeric(racingCountInputValue) {
    let isValid = true;
    let i;
    for (i = 0; i < racingCountInputValue.length; i += 1) {
      if (Number.isNaN(parseInt(racingCountInputValue[i], 10))) {
        isValid = false;
      }
    }

    return isValid;
  }

  isEmptyOrZero(racingCountInputValue) {
    return parseInt(racingCountInputValue, 10) === 0 || racingCountInputValue === '';
  }

  isRacingCountValid(racingCountInputValue) {
    let isValid = true;

    if (!this.isNumeric(racingCountInputValue) || this.isEmptyOrZero(racingCountInputValue)) {
      alert(ALERT_MESSAGE.isNotValidNumber);
      isValid = false;
    }

    return isValid;
  }
}
