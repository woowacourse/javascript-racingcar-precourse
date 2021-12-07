import Car from './Car.js';

const cars = {};

const saveCars = carNames => {
  carNames.forEach(carName => {
    cars[carName] = new Car(carName);
  });
};

export { saveCars, cars };
