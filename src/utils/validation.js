const isEmpty = (inputValue) => {
  return inputValue === '';
};

const isLongerThanFiveLetters = (carNamesInput) => {
  return carNamesInput.split(',').some((carName) => carName.length > 5);
};

const isDuplicate = (carNamesInput) => {
  const carNamesArray = carNamesInput.split(',');
  return carNamesArray.length !== [...new Set(carNamesArray)].length;
};

const isIntegerInValid = (racingCountInput) => {
  return !Number.isInteger(Number(racingCountInput));
};

const isSameOrLessZero = (racingCountInput) => {
  return Number(racingCountInput) <= 0;
};

const isValidateCarNames = (carNamesInput) => {
  if (isEmpty(carNamesInput)) {
    alert('자동차 이름을 입력해주세요.  올바른 예) east,west,south,north');
    return false;
  }

  if (isLongerThanFiveLetters(carNamesInput)) {
    alert(' 자동차 이름은 5자 이하로 입력해주세요.  올바른 예) east,west,south,north');
    return false;
  }

  if (isDuplicate(carNamesInput)) {
    alert('자동차 이름은 중복 없이 입력해주세요.  올바른 예) east,west,south,north');
    return false;
  }

  return true;
};

const isValidateRacingCount = (racingCountInput) => {
  if (isEmpty(racingCountInput)) {
    alert('시도할 횟수를 입력해주세요.  올바른 예) 5');
    return false;
  }

  if (isIntegerInValid(racingCountInput)) {
    alert('시도할 횟수는 1 이상의 자연수로 입력해주세요.  올바른 예) 5');
    return false;
  }

  if (isSameOrLessZero(racingCountInput)) {
    alert('시도할 횟수는 1 이상의 자연수로 입력해주세요.  올바른 예) 5');
    return false;
  }

  return true;
};

export { isValidateCarNames, isValidateRacingCount };
