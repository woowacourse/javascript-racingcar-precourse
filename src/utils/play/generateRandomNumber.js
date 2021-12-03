export const generateRandomNumber = () => {
  const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
  return randomNum;
};
