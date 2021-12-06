import { MAX_RANGE_NUMBER, MIN_RANGE_NUMBER } from './constants.js';

const getRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(MIN_RANGE_NUMBER, MAX_RANGE_NUMBER);
};

export default getRandomNumber;
