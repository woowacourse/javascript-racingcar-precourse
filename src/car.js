export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    this.position += 1;
  }
}
