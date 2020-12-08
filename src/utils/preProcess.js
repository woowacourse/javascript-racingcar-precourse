import { NAME_SEPERATOR } from '../constants/configuration.js';

export const preProcessCarNamesToCarNameList = (carNames) => {
  let carNameList = carNames.split(NAME_SEPERATOR);
  carNameList = carNameList.map((name) => name.trim());
  carNameList = carNameList.filter((name) => name !== '');

  return carNameList;
};

export const preProcessTryCount = (tryCount) => {
  return Number(tryCount);
};

export default {
  preProcessCarNamesToCarNameList,
  preProcessTryCount,
};
