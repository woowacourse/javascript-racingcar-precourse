import { MIN_NUMBER, MAX_NUMBER } from '../data/constatns';

const genRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
};

export default genRandomNumber;
