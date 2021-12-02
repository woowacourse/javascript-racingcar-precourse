const getRandomNumber = (min, max) => {
  const num = window.MissionUtils.Random.pickNumberInRange(min, max);

  return num;
};

export { getRandomNumber };
