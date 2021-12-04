export default class Car {
  constructor(name) {
    this.name = name;
    this.move = '';
  }

  doRacing() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9, 1);
    if (randomNumber >= 4) {
      this.move += '-';
    }
  }

  getDestination() {
    return this.move.length;
  }
}
