import { $ } from '../dom/dom.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
import showAlertMsg from './showAlertMsg.js';

function checkValidCarCount(racingCount) {
  if (racingCount < 1) {
    return false;
  }
  return true;
}

export default function getUserRacingCountInput() {
  const racingCount = $('#racing-count-input').value;
  if (checkUserInputEmpty(racingCount)) {
    if (checkValidCarCount(racingCount)) {
      return racingCount;
    } else if (checkValidCarCount(racingCount) === false) {
      showAlertMsg('racingcountinput');
      return false;
    }
  } else if (checkUserInputEmpty(racingCount) === false) {
    showAlertMsg('racingcountinput');
    return false;
  }
}
