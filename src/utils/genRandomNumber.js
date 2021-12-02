import { MIN_NUMBER, MAX_NUMBER } from './constants.js';

const genRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
};

export default genRandomNumber;
