export const getRandomNumber = (min, max) => {
  const num = MissionUtils.Random.pickNumberInRange(min, max);

  return num;
};
