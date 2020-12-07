import Car from "../Components/car.js";

function makeCars(carNames) {
  let cars = [];

  for (let i = 0; i < carNames.length; i++) {
    cars.push(new Car(carNames[i]));
  }

  return cars;
}

export { makeCars };
