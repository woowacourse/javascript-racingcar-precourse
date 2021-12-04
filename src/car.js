export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  drive = (number) => {
    if (number >= 4) this.distance += 1;
  }
}
