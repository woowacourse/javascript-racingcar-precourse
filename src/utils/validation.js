const isEmpty = (carNamesInput) => {
  return carNamesInput === '';
};

const isLongerThanFiveLetters = (carNamesInput) => {
  return carNamesInput.split(',').some((carName) => carName.length > 5);
};

const isDuplicate = (carNamesInput) => {
  const carNamesArray = carNamesInput.split(',');
  return carNamesArray.length !== [...new Set(carNamesArray)].length;
};

const isValidate = (carNamesInput) => {
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

export default isValidate;
