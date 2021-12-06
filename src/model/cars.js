import Car from './Car.js';

const cars = {};

const saveCars = carNames => {
  carNames.forEach(carName => {
    cars[carName] = new Car(carName);
  });
};

const moveDist = () => {
  for (const car of Object.keys(cars)) {
    cars[car].calcDist();
  }
};

const count = racingCount => {
  for (let i = 0; i < racingCount; i++) {
    moveDist();
  }
};

export { saveCars, cars, count };
