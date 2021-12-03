export const userInputTypeException = (userInput) => {
  if (!userInput) {
    alert('자동차의 이름을 입력하세요.');
  } else if (!userInput.includes(',')) {
    alert('자동차의 이름은 쉼표로 구분해주세요.');
  } else {
    return false;
  }

  return true;
};

export const userInputLengthException = (userInputArray) => {
  let isException = false;

  userInputArray.forEach((element) => {
    if (element.length > 5) {
      isException = true;
    }
  });

  if (isException) {
    alert('자동차 이름은 5자 이하만 가능합니다.');
  }

  return isException;
};

export const userInputDuplicatedException = (userInputArray) => {
  const unduplicatedUserInputSet = new Set(userInputArray);

  if (unduplicatedUserInputSet.size != userInputArray.length) {
    alert('중복되는 자동차가 존재합니다.');
    return true;
  }

  return false;
};

export const carNameIsVacuumException = (userInputArray) => {
  let isException = false;

  userInputArray.forEach((element) => {
    if (!element) {
      isException = true;
    }
  });

  if (isException) {
    alert('이름이 공백인 자동차가 존재합니다.');
  }

  return isException;
};
