import { CAR } from './constants.js';

const getRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(CAR.FIRST_IN_NUM, CAR.LAST_IN_NUM);
};

export default getRandomNumber;
