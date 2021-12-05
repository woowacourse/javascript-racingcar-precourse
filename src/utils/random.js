export const isConditionToMove = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
};
