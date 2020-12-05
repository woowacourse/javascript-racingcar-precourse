const isLongerThanFive = carName => {
  return carName.length > 5;
};

const isLessThanOne = inputValue => {
  return +inputValue <= 0;
};

export const isEmptyString = inputValue => {
  return !inputValue;
};

// if car name is empty string or longer than 5, it's not proper.
export const isNotProperCarName = carName => {
  let result = false;
  if (isLongerThanFive(carName)) {
    alert('5자가 넘는 이름이 존재합니다.');
    result = true;
  } else if (isEmptyString(carName)) {
    alert('이름 중에 빈 문자열이 존재합니다.');
    result = true;
  }

  return result;
};

// if racing count input is an empty string or not a number, it's not proper.
export const isNotProperRacingCountInputValue = inputValue => {
  let result = false;
  if (isEmptyString(inputValue)) {
    alert('값을 입력해주세요.');
    result = true;
  } else if (isNaN(inputValue)) {
    alert('숫자를 입력해주세요.');
    result = true;
  } else if (isLessThanOne(inputValue)) {
    alert('1 이상의 숫자를 입력해주세요.');
    result = true;
  }

  return result;
};
