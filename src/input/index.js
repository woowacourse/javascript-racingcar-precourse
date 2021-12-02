import { ALERT_MESSAGE } from '../constants/index.js';

export default class Input {
  constructor() {
    this.carNamesArray = [];
    this.racingCount = 0;
  }

  setRacingCount(number) {
    this.racingCount = number;
  }

  isLengthInRange(carNamesArray) {
    let isInRange = true;
    carNamesArray.forEach(x => {
      if (x.length > 5 || x.length === 0) {
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
    let isValid = true;

    if (!this.isLengthInRange(carNamesArray)) {
      alert(ALERT_MESSAGE.lengthNotInRange);
      isValid = false;
    } else if (this.isNameDuplicated(carNamesArray)) {
      alert(ALERT_MESSAGE.nameDuplicated);
      isValid = false;
    } else if (isValid) {
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

  isZero(racingCountInputValue) {
    return parseInt(racingCountInputValue, 10) === 0;
  }

  isRacingCountValid(racingCountInputValue) {
    let isValid = false;
    if (!this.isNumeric(racingCountInputValue)) {
      alert(ALERT_MESSAGE.notNumeric);
    } else if (this.isZero(racingCountInputValue)) {
      alert(ALERT_MESSAGE.isZero);
    } else {
      isValid = true;
    }

    return isValid;
  }
}
