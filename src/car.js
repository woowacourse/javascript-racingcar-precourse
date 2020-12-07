export class Car {
  constructor(name) {
    this.name = name;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
}