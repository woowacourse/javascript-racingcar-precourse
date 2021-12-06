import { $racingCount, ERROR_RACING_COUNT } from "../common/constants.js";
import play from "../play/play.js";

const trimRacingCount = () => $racingCount.value.trim();

const isNaturalNumber = () =>
  Number.isInteger($racingCount.value * 1) &&
  $racingCount.value > 0 &&
  !$racingCount.value.includes("e");

const makeAlert = () => {
  $racingCount.value = "";
  $racingCount.focus();
  alert(ERROR_RACING_COUNT);
};

export default function validateRacingCount(e) {
  e.preventDefault();
  const racingCount = trimRacingCount();

  if (isNaturalNumber(racingCount)) {
    play();
    return true;
  }
  makeAlert();

  return false;
}
