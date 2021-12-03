export const cars = [];

function Car(name) {
  this.name = name;
  this.count = 0;
}

export function makeObjectCars(carNames) {
  carNames.forEach((name) => cars.push(new Car(name)));
}
