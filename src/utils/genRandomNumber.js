const MIN_NUMBER = 0;
const MAX_NUMBER = 9;

const genRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
};

export default genRandomNumber;
