import { LENGTH_LIMIT_OF_CAR_NAME } from "../../utils/constants.js";

const isLengthOK = carName => {
  const { min, max } = LENGTH_LIMIT_OF_CAR_NAME;

  return carName.length >= min && carName.length <= max;
};

const isCarNamesOK = carNames => {
  let check = true;

  for (let i = 0; i < carNames.length; i++) {
    if (
      !isLengthOK(carNames[i]) ||
      carNames[i].replace(/^\s+|\s+$/g, "") === ""
    ) {
      check = false;
      break;
    }
  }

  return check;
};

const isDuplicateName = carNamesArr => {
  let check = false;

  const carNamesSet = new Set(carNamesArr);

  if (carNamesArr.length !== carNamesSet.size) {
    check = true;
  }

  return check;
};

const isValidCarNames = carNamesInput => {
  let check = true;

  if (carNamesInput.length === 0) {
    check = false;
  } else {
    const carNames = carNamesInput.split(",");

    if (isDuplicateName(carNames) || !isCarNamesOK(carNames)) {
      check = false;
    }
  }

  return check;
};

export { isValidCarNames };
