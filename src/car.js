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

  static getMaxPosition(cars) {
    return Math.max(...cars.map((car) => car.getPosition()));
  }

  static getCarsByPosition(cars, position) {
    return cars.filter((car) => car.getPosition() === position);
  }
}

export default Car;
