import {
  $carName,
  $racingCount,
  $racingCountSubmit,
  $racingCountTitle,
  ERROR_CAR_NAME,
  NAME_MAX_LENGTH,
  EMPTY,
} from "../common/constants.js";

export const splitCarName = () => $carName.value.split(",");

export const trimCarName = (carArr) => carArr.map((el) => el.trim());

const isCarNameLength = (carArr) => {
  let valid = true;
  carArr.forEach((el) => {
    if (el.length > NAME_MAX_LENGTH) {
      valid = false;
    }
  });

  return valid;
};

const isCarNameBlank = (carArr) => {
  let valid = true;
  carArr.forEach((el) => {
    if (el === EMPTY) {
      valid = false;
    }
  });

  return valid;
};

const showCountInput = () => {
  $racingCountTitle.style.visibility = "visible";
  $racingCount.style.visibility = "visible";
  $racingCountSubmit.style.visibility = "visible";
};

const makeAlert = () => {
  $carName.value = EMPTY;
  $carName.focus();

  alert(ERROR_CAR_NAME);
};

export default function validateCarName(e) {
  e.preventDefault();
  const carArr = trimCarName(splitCarName());

  if (isCarNameLength(carArr) && isCarNameBlank(carArr)) {
    showCountInput();
    return true;
  }
  makeAlert();

  return false;
}
