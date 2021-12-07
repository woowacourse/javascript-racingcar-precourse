import showAlert from "../view/showAlert.js";

function checkRacingCount(racingCount) {
  const isUnderZero = Number(racingCount) <= 0 ? true : false;
  if (isUnderZero) {
    showAlert("RACING_COUNT");

    return false;
  }

  return true;
}

function checkNameisSpace(carNamesArray) {
  let isExistSpace = false;
  carNamesArray.forEach((carName) => {
    if (carName === "") {
      isExistSpace = true;
    }
  });

  if (isExistSpace) {
    showAlert("SPACE");

    return false;
  }

  return true;
}

function checkTotalCar(carNamesArray) {
  let isOverTotalMaxLength = false;
  carNamesArray.forEach((carName) => {
    if (carName.length <= 0 || carName.length > 5) {
      isOverTotalMaxLength = true;
    }
  });

  if (isOverTotalMaxLength) {
    showAlert("LENGTH");

    return false;
  }

  return true;
}

export default class Validation {
  constructor() {
    this.carNames = null;
    this.racingCount = 0;
  }

  isValidateCarNames(carNamesArray) {
    if (!checkNameisSpace(carNamesArray)) {
      return false;
    }
    if (!checkTotalCar(carNamesArray)) {
      return false;
    }

    return true;
  }

  isValidateRacingCount(racingCount) {
    if (!checkRacingCount(racingCount)) {
      return false;
    }

    return true;
  }
}
