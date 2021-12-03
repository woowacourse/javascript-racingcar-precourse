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

  static generateCars(carNames) {
    return carNames.map((carName) => new Car(carName));
  }
}

export default Car;
