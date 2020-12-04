import { NAME_SEPERATOR } from '../constants/configuration.js';

const carNameCheckResult = {
  isCarNumberEnough: true,
  isCarNameNotLong: true,
  isAllCarNameDifferent: true,
};

const checkIsCarNameLong = (carNameList) => {
  let isCarNameLong = false;
  for (let i = 0; i < carNameList.length; i += 1) {
    if (carNameList[i].length > 5) {
      isCarNameLong = true;
      break;
    }
  }

  return isCarNameLong;
};

const checkIsAllCarNameDifferent = (carNameList) => {
  const isAllCarNameDifferent =
    carNameList.length !== new Set(carNameList).size;

  return isAllCarNameDifferent;
};

export const makeCarNamesCheckResult = (names) => {
  const carNameList = names.split(NAME_SEPERATOR);
  if (carNameList.length < 2) {
    carNameCheckResult.isCarNumberEnough = false;
  }
  if (checkIsCarNameLong(carNameList)) {
    carNameCheckResult.isCarNameNotLong = false;
  }
  if (checkIsAllCarNameDifferent(carNameList)) {
    carNameCheckResult.isAllCarNameDifferent = false;
  }

  return carNameCheckResult;
};
export const checkTryCount = (tryCount) => {
  let isValid = true;
  if (tryCount <= 0) {
    isValid = false;
  }
  if (Math.round(tryCount) !== tryCount) {
    isValid = false;
  }

  return isValid;
};
