export default class Car {
  constructor(name) {
    this.name = name;
    this.count = 0;
  }

  move() {
    this.count++;
  }

  getName() {
    return this.name;
  }

  getCount() {
    return this.count;
  }
}
