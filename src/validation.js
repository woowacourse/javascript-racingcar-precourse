import {
  error_input_null,
  error_input_split_space,
  error_over_length,
  error_null_car_names,
  error_unvalid_count_input,
} from "./constant.js";

const isCarInputNull = carInputs => {
  let isNull = false;
  if (carInputs === "" || carInputs === null) {
    alert(error_input_null);
    isNull = true;
  }

  return isNull;
};

const isCarInputsSplitBySpace = carInputs => {
  let isSplitBySpace = false;
  if (carInputs.split(" ").length >= 2) {
    alert(error_input_split_space);
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
    alert(error_over_length);
  }

  return isOverFiveLength;
};

const isInputCar = cars => {
  let isInput = true;
  if (cars.length === 0) {
    alert(error_null_car_names);
    isInput = false;
  }

  return isInput;
};

const isIntergerInput = racingCountInput => {
  let isInterger = true;
  if (!Number.isInteger(parseInt(racingCountInput))) {
    alert(error_unvalid_count_input);
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

export const isValidCountInput = (cars, racingCountInput) => {
  let isValid = true;
  if (!isInputCar(cars)) {
    isValid = false;
  } else if (!isIntergerInput(racingCountInput)) {
    isValid = false;
  }

  return isValid;
};
