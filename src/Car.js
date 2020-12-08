export default class Car {
  constructor(name) {
    this.carName = name;
    this.position = 0;
  }

  go() {
    this.position += 1;
  }

  randomNumberGenerator() {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
  }

  updatePosition() {
    const number = this.randomNumberGenerator();
    if (number > 3) {
      this.go();
    }
  }
}
