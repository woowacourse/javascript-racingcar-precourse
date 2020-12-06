export default class Car {
  constructor(name) {
    this.name = name;

    this.distance = 0;
    this.position = "";
  }

  move(number) {
    if (number >= 4) {
      this.distance++;
      this.position += "-";
    }
  }
}
