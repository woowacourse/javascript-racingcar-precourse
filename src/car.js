export default class Car {
  constructor(name) {
    this.name = name;

    this.MOVE_CONDITION = 4;
    this.distance = 0;
    this.position = "";
  }

  move(number) {
    if (number >= this.MOVE_CONDITION) {
      this.distance++;
      this.position += "-";
    }
  }
}
