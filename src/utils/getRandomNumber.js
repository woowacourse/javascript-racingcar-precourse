const getRandomNumber = () => {
  const FIRST_IN_NUM = 0;
  const LAST_IN_NUM = 9;

  return MissionUtils.Random.pickNumberInRange(FIRST_IN_NUM, LAST_IN_NUM);
};

export default getRandomNumber;
