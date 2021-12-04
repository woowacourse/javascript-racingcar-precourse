class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  move() {
    this.position += 1;
  }

  static generateCarsByNames(names) {
    return names.map((name) => new Car(name));
  }
}

export default Car;
