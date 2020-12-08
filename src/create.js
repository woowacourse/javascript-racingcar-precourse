import Car from "./car.js";
import { racingCountPlay } from "./game.js";

export function createRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

export function createCar(carNamesInput, racingCountInput) {
  const carNames = carNamesInput;
  const carsLength = carNames.length;
  let cars = [];
  let i;

  for (i = 0; i < carsLength; i++) {
    carNames[i] = new Car(carNames[i]);
    cars.push(carNames[i]);
  }
  racingCountPlay(carsLength, cars, racingCountInput);
}