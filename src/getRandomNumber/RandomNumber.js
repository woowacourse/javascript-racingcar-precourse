export default class RandomNumber {
  get = () => {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  };
}
