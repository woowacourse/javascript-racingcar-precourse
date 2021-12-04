import Car from './Car.js';

function getCars(userInput) {
  const cars = [];
  userInput.getCarNames().forEach((name) => {
    cars.push(new Car(name));
  });
  return cars;
}

function goOnce(cars) {
  cars.forEach((car) => car.go());
}

export default function playGame(userInput) {
  const cars = getCars(userInput);

  for (let index = 0; index < userInput.getRepeatCount(); index += 1) {
    goOnce(cars);
  }
}
