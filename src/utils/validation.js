import { NAME_SEPERATOR } from '../constants/configuration.js';

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

export const checkCarNames = (names) => {
  let isValid = true;
  const carNameList = names.split(NAME_SEPERATOR);
  if (carNameList.length === 0) {
    isValid = false;
  }
  if (checkIsCarNameLong(carNameList)) {
    isValid = false;
  }

  return isValid;
};
export const checkTryCount = (tryCount) => {
  let isValid = true;
  if (tryCount <= 0) {
    isValid = false;
  }

  return isValid;
};
