import { NUMBER } from '../constants/constants.js';

export const generateRandomNumber = function () {
  const randomNumber = MissionUtils.Random.pickNumberInRange(
    NUMBER.RANDOM_NUMBER.MIN,
    NUMBER.RANDOM_NUMBER.MAX
  );

  return randomNumber;
};
