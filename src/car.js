export default class Car {
  constructor(name) {
    this.name = name;
    this.move = '';
    this.moveCount = 0;
  }

  doRacing() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9, 1);
    if (randomNumber >= 4) {
      this.moveCount++;
      this.move += '-';
    }
  }
}
