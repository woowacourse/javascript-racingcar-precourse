import { MIN_NUMBER, MAX_NUMBER } from './constants.js';

export const genRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
};
