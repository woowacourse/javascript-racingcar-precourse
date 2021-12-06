const MAX_NUMBER = 9;
const MIN_NUMBER = 0;

export default function getRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
}
