const isCarInputNull = carInputs => {
  let isNull = false;
  if (carInputs === "" || carInputs === null) {
    alert("자동차 이름을 입력해 주세요.");
    isNull = true;
  }

  return isNull;
};

const isCarInputsSplitBySpace = carInputs => {
  let isSplitBySpace = false;
  if (carInputs.split(" ").length >= 2) {
    alert("자동차 이름을 공백이 아닌 콤마로 구분하여 입력해주세요.");
    isSplitBySpace = true;
  }

  return isSplitBySpace;
};

const isCarInputsOverFiveLength = carInputs => {
  let isOverFiveLength = false;
  carInputs.forEach(carInput => {
    if (carInput.length > 5) {
      isOverFiveLength = true;
    }
  });

  if (isOverFiveLength) {
    alert("자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.");
  }

  return isOverFiveLength;
};

const isInputCar = racingCountInput => {
  let isInput = true;
  if (racingCountInput === []) {
    alert("자동차 이름을 입력 후 시도할 횟수를 입력해 주세요.");
    isInput = false;
  }

  return isInput;
};

const isIntergerInput = racingCountInput => {
  let isInterger = true;
  if (!Number.isInteger(parseInt(racingCountInput))) {
    alert("시도할 횟수를 입력해 주세요.");
    isInterger = false;
  }

  return isInterger;
};

export const isValidCarInputs = carInputs => {
  let isValid = true;
  if (isCarInputNull(carInputs)) {
    isValid = false;
  } else if (isCarInputsSplitBySpace(carInputs)) {
    isValid = false;
  } else if (isCarInputsOverFiveLength(carInputs.split(","))) {
    isValid = false;
  }

  return isValid;
};

export const isValidCountInput = racingCountInput => {
  let isValid = true;
  if (!isInputCar(racingCountInput)) {
    isValid = false;
  } else if (!isIntergerInput(racingCountInput)) {
    isValid = false;
  }

  return isValid;
};
