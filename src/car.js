export default class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  goOrStop() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.location += 1;
    }
  }
}
