import Car from './car.js'

export function createRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

export function createCar(carNamesInput, racingCountInput) {
  const carNames = carNamesInput;
  const length = carNames.length;
  let cars = [];
  let i;

  for (i = 0; i < length; i++) {
    carNames[i] = new Car(carNames[i])
    cars.push(carNames[i]);
  }
  console.log(cars, racingCountInput)
}