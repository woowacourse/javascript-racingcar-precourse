export default class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  generateRandomNumber = () => {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  };

  moveForward = () => {
    this.forwardCount++;
  };
}
