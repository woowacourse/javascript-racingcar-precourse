import { TRIAL_MIN } from './const.js';

export function isTrialEnough(trial) {
  if (trial >= TRIAL_MIN) {
    return true;
  }
  alert(`please enter at least ${TRIAL_MIN} trial`);
}
