export default class Car {
  constructor(name) {
    this.name = name;
    this.positionInRace = 0;
  }

  drive() {
    const myRandom = Math.floor(Math.random() * 10);
    if (myRandom >= 4) {
      this.goFront();
    }
  }
  goFront() {
    this.positionInRace++;
  }
}
