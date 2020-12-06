export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  _makeRandomNumber(max = 9, min = 0) {
    return Math.floor(Math.random() * max) + min;
  }

  move() {
    const randomNumber = this._makeRandomNumber();
    if (randomNumber >= 4) {
      this.distance += 1;
    }
  }
}
