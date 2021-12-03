import { RANGE_RANDOM_NUMBER } from '../const.js';

const { MissionUtils } = window;

function generateRandomNumber() {
  const { min, max } = RANGE_RANDOM_NUMBER;
  return MissionUtils.pickNumberInRange(min, max);
}

export default generateRandomNumber;
