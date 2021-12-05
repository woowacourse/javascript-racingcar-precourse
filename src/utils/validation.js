const isEmpty = (carNamesInput) => {
  return carNamesInput === '';
};

const isValidate = (carNamesInput) => {
  if (isEmpty(carNamesInput)) {
    alert('자동차 이름을 입력해주세요.  올바른 예) east,west,south,north');
    return false;
  }

  return true;
};

export default isValidate;
