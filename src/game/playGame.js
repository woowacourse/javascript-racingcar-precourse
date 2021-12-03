import Car from './Car.js';

function getCars(userInput) {
  const cars = [];

  userInput.getCarNames().forEach((name) => {
    cars.push(new Car(name));
  });
  return cars;
}

export default function playGame(userInput) {
  const cars = getCars(userInput);
}
