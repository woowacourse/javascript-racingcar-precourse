import { Car } from './class/car.js';
import { $ } from './util/dom.js';
import { removeBeforeResult } from './render.js';

export const startRacingGame = () => {
  let cars = makeCars();
  removeBeforeResult();
  goAndStopCars(cars);
};

const makeCars = () => {
  const carNames = $('#car-names-input').value.split(',');
  let cars = [];
  for (let i = 0; i < carNames.length; i++) {
    const car = new Car(carNames[i]);
    cars.push(car);
  }
  return cars;
};

const goAndStopCars = cars => {
  const racingCount = $('#racing-count-input').value;
  for (let i = 0; i < racingCount; i++) {
    for (let j = 0; j < cars.length; j++) {
      cars[j].startGame();
    }
  }
};
