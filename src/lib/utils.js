export const isEveryStringLessOrEqualsFive = namesArray => {
  return namesArray.every(name => name.length <= 5);
};
export const getRandomNumber = () => {
  return window.MissionUtils.Random.pickNumberInRange(0, 9);
};
