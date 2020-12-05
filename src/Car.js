export default class Car {
  constructor(name) {
    this.name = name;
    this.count = 0;
  }

  move() {
    this.count++;
  }

  getCount() {
    return this.count;
  }
}
