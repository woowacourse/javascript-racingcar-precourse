export default class Car {
  constructor(name) {
    this.name = name;
    this.advance = '';
  }

  generateRandomNumber() {
    const start = 0;
    const end = 9;
    const randomNumber = MissionUtils.Random.pickNumberInRange(start, end);
    return randomNumber;
  }
}
