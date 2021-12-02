import { ALERT_MESSAGE } from '../constants/index.js';

export default class Input {
  constructor() {
    this.carNamesList = [];
    this.racingCount = 0;
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
    let isValid = true;

    if (!this.isLengthInRange(carNamesArray)) {
      alert(ALERT_MESSAGE.LengthNotInRange);
      isValid = false;
    } else if (this.isNameDuplicated(carNamesArray)) {
      alert(ALERT_MESSAGE.NameDuplicated);
      isValid = false;
    } else if (isValid) {
      this.carNamesList = carNamesArray;
    }

    return isValid;
  }
}
