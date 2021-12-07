function Car(name) {
  this.name = name;
  this.distance = 0;
}

export const cars = [];

export function makeObjectCars(carNames) {
  carNames.forEach((name) => cars.push(new Car(name)));
}
