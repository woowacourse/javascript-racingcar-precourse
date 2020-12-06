export default class Car {
  constructor(name) {
    this.name = name;
  }

  move(number) {
    if (number >= 4) {
      this.distance++;
      this.position += "-";
    }
  }
}
