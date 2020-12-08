export default class Car {
  constructor(name) {
    this.carName = name;
    this.position = 0;
  }

  go() {
    this.position += 1;
  }
}
