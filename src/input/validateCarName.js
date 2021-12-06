import {
  $carName,
  $racingCount,
  $racingCountSubmit,
  $racingCountTitle,
  ERROR_CAR_NAME,
  NAME_MAX_LENGTH,
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
    if (el === "") {
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

export default function validateCarName(e) {
  e.preventDefault();

  const carArr = trimCarName(splitCarName());
  if (isCarNameLength(carArr) && isCarNameBlank(carArr)) {
    showCountInput();
    return true;
  }

  $carName.value = "";
  $carName.focus();
  alert(ERROR_CAR_NAME);

  return false;
}
