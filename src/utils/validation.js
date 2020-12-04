import { NAME_SEPERATOR } from '../constants/configuration.js';

const carNameCheckResult = {
  isCarNumberNotEnough: false,
  isCarNameLong: false,
  isAllCarNameDifferent: false,
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

export const getCarNamesCheckResult = (names) => {
  const carNameList = names.split(NAME_SEPERATOR);
  if (carNameList.length < 2) {
    carNameCheckResult.isCarNumberNotEnough = true;
  }
  if (checkIsCarNameLong(carNameList)) {
    carNameCheckResult.isCarNameLong = true;
  }
  if (checkIsAllCarNameDifferent(carNameList)) {
    carNameCheckResult.isAllCarNameDifferent = true;
  }

  return carNameCheckResult;
};
export const checkTryCount = (tryCount) => {
  let isValid = true;
  if (tryCount <= 0) {
    isValid = false;
  }

  return isValid;
};
