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

export const makeCarNamesCheckResult = (carNameList) => {
  const carNameCheckResult = {};
  carNameCheckResult.isCarNumberEnough = carNameList.length >= 2;
  carNameCheckResult.isCarNameNotLong = !checkIsCarNameLong(carNameList);
  carNameCheckResult.isAllCarNameDifferent = !checkIsAllCarNameDifferent(
    carNameList
  );

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

export default {
  makeCarNamesCheckResult,
  checkTryCount,
};
