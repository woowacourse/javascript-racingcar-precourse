export default class Car {
  constructor(name) {
    this.name = name;
    this.moveForwardDistance = 0;
    this.MAXVAL = 9;
    this.MINVAL = 0;
  }

  randomNumber() {
    const number = Math.floor(
      Math.random() * (this.MAXVAL - this.MINVAL + 1) + this.MINVAL,
    );

    return number;
  }
}
