const warningAlert = title => {
  alert(`${title}을 다시 입력해주세요!`);
};

const checkLength = carName => {
  if (carName.length > 5 || carName < 1) return false;
  return true;
};

const checkInt = racingCount => {
  if (racingCount < 1) return false;
  return true;
};

const carNamesValidate = carNames => {
  if (!carNames.every(checkLength)) {
    warningAlert('자동차 이름');
    return false;
  }
  return true;
};

const racingCountValidate = racingCount => {
  if (!checkInt(racingCount)) {
    warningAlert('시도 횟수');
    return false;
  }
  return true;
};

export { carNamesValidate, racingCountValidate };
