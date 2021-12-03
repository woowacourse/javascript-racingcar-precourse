import {
  ERROR_INPUT_NULL,
  ERROR_INPUT_SPLIT_SPACE,
  ERROR_OVER_LENGTH,
  ERROR_INPUT_OVERLAP,
  ERROR_NULL_CAR_NAMES,
  ERROR_UNVALID_COUNT_INPUT,
} from "./constant.js";

const isCarInputNull = carInputs => {
  let isNull = false;
  if (carInputs === "" || carInputs === null) {
    alert(ERROR_INPUT_NULL);
    isNull = true;
  }

  return isNull;
};

const isCarInputsSplitBySpace = carInputs => {
  let isSplitBySpace = false;
  if (carInputs.split(" ").length >= 2) {
    alert(ERROR_INPUT_SPLIT_SPACE);
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
    alert(ERROR_OVER_LENGTH);
  }

  return isOverFiveLength;
};

const isCarInputOverlap = carInputs => {
  let isOverlap = false;
  carInputs.forEach(standardNumber => {
    if(carInputs.filter(input => input===standardNumber).length>=2) {
      isOverlap = true;
    }
  })

  if(isOverlap) {
    alert(ERROR_INPUT_OVERLAP);
  }

  return isOverlap;
}

const isInputCar = cars => {
  let isInput = true;
  if (cars.length === 0) {
    alert(ERROR_NULL_CAR_NAMES);
    isInput = false;
  }

  return isInput;
};

const isIntergerInput = racingCountInput => {
  let isInterger = true;
  if (!Number.isInteger(parseInt(racingCountInput))) {
    alert(ERROR_UNVALID_COUNT_INPUT);
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
  } else if(isCarInputOverlap(carInputs.split(","))) {
    isValid = false;
  }

  return isValid;
};

export const isValidCountInput = (cars, racingCountInput) => {
  let isValid = true;
  if (!isInputCar(cars)) {
    isValid = false;
  } else if (!isIntergerInput(racingCountInput)) {
    isValid = false;
  }

  return isValid;
};
