import { GAME_RULE } from './constants.js';

const getRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(
    GAME_RULE.MIN_RANGE_NUMBER,
    GAME_RULE.MAX_RANGE_NUMBER
  );
};

export default getRandomNumber;
