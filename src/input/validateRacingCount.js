import { $racingCount, ERROR_RACING_COUNT } from "../common/constants.js";

const trimRacingCount = () => $racingCount.value.trim();

const isNaturalNumber = () =>
  Number.isInteger($racingCount.value) && $racingCount.value > 0;

export default function validateRacingCount(e) {
  e.preventDefault();
}
