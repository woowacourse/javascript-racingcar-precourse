import { MIN_NUMBER, MAX_NUMBER } from '../data/constatns.js';

const genRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
};

export default genRandomNumber;
