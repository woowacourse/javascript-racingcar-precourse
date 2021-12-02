export default class Car {
  constructor(name) {
    this.name = name;
    this.moveDistance = 0;
  }

  playOneRound() {
    let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.moveDistance = this.moveDistance + 1;
    }
  }
}
