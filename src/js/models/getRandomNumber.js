import { CAR } from '../utils/constants.js';

const getRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(CAR.MIN_IN_NUM, CAR.MAX_IN_NUM);
};

export default getRandomNumber;
