export default class Car {
  constructor(name, count) {
    this.name = name;
    this.count = count;
  }

  move() {
    this.count++;
  }

  getCount() {
    return this.count;
  }
}
