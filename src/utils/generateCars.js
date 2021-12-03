import Car from '../Car.js';

export default function generateCars(carNameArray) {
  return carNameArray.map((name) => new Car(name));
}
