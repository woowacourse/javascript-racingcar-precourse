export default class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  moveForward() {
    this.score += 1;
  }
}
