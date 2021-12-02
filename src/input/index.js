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

    return isBlank;
  }

  isLengthInRange(carNamesArray) {
    let isInRange = true;
    carNamesArray.forEach(x => {
      if (x.length > 5) {
        isInRange = false;
      }
    });

    return isInRange;
  }

  isNameDuplicated(carNamesArray) {
    const carNameSet = new Set(carNamesArray);

    return carNameSet.size !== carNamesArray.length;
  }

  isCarNamesValid(carNamesInputValue) {
    const carNamesArray = carNamesInputValue.split(',');
    let isValid = false;
    if (this.isBlankExist(carNamesArray)) {
      alert(ALERT_MESSAGE.blankExist);
    } else if (!this.isLengthInRange(carNamesArray)) {
      alert(ALERT_MESSAGE.lengthNotInRange);
    } else if (this.isNameDuplicated(carNamesArray)) {
      alert(ALERT_MESSAGE.nameDuplicated);
    } else {
      isValid = true;
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
    let isValid = false;

    if (!this.isNumeric(racingCountInputValue) || this.isEmptyOrZero(racingCountInputValue)) {
      alert(ALERT_MESSAGE.isNotValidNumber);
    } else {
      isValid = true;
    }

    return isValid;
  }
}
