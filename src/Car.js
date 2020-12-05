export class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  go() {
    this.distance += 1;
  }
}
