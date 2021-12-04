import Car from './Car.js';
import showRaceResult from '../view/showRaceResult.js';
import initView from '../view/initView.js';

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

  initView();
  for (let index = 0; index < userInput.getRepeatCount(); index += 1) {
    goOnce(cars);
    showRaceResult(cars);
  }
}
