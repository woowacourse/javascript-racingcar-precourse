import Car from './Car.js';

export const initialCarNames = carNames => {
  const cars = carNames.map(name => new Car(name));
};

export default initialCarNames;
