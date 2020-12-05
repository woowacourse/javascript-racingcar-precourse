export default class Car {
  constructor(name) {
    this.name = name;
    this.movedDistance = 0;
  }

  moveForwordByRandom() {
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber >= 4) {
      this.movedDistance++;
    }
  }
}
