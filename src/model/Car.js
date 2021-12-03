export class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    this.distance++;
  }

  getName() {
    return this.name;
  }

  getDistance() {
    return this.distance;
  }
}
