function isMovable() {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  return randomNumber >= 4;
}

export default isMovable;
