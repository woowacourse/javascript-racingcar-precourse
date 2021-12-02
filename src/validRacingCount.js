import { $racingCountInput } from './constants/HTMLconstant.js';
import { NOT_VALID_RACING_INPUT } from './constants/errorMessage.js';

const racingCountStartZero = racingCount => racingCount[0] === '0';
const racingCountUnderOne = racingCount => +racingCount < 1;

export default function validRacingCount(racingCount) {
  if (racingCountStartZero(racingCount) || racingCountUnderOne(racingCount)) {
    alert(NOT_VALID_RACING_INPUT);
    $racingCountInput.value = '';
    $racingCountInput.focus();
    return false;
  }

  return +racingCount;
}
