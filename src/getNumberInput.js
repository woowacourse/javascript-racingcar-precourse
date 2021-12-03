import { RACING_COUNT_MIN } from './const.js';

export function isTrialEnough(trial) {
  if (trial >= RACING_COUNT_MIN) {
    return true;
  }
  alert(`please enter at least ${RACING_COUNT_MIN} trial`);
}
