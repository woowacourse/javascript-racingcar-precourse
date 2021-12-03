import { ALERT_MESSAGE } from '../constants.js';

export default function isValidRacingCount(racingCountString) {
  const racingCount = Number(racingCountString);
  if (Number.isNaN(racingCount) || racingCount === 0) {
    alert(ALERT_MESSAGE.racingCountAlert);
    return false;
  }
  return true;
}
