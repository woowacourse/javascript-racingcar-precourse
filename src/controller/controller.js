import { Car } from '../model/Car.js';
import { $ } from '../utils/dom.js';
import { MOVE_CONDITION_NUMBER } from '../utils/constants.js';
import { genRandomNumber } from '../utils/genRandomNumber.js';

const genCarInstances = (carNames) => {
  return String(carNames)
    .split(',')
    .map((carName) => new Car(carName));
};

const calculateMovedState = (cars) => {
  cars.forEach((car) => {
    if (genRandomNumber() >= MOVE_CONDITION_NUMBER) {
      car.move();
    }
  });
};

const getMaxMovedDistance = (cars) => {
  let maxMovedDistance = 0;
  cars.forEach((car) => {
    if (car.getDistance() > maxMovedDistance) maxMovedDistance = car.getDistance();
  });
  return maxMovedDistance;
};

const getWinner = (cars) => {
  const maxMovedDistance = getMaxMovedDistance(cars);
  return cars
    .filter((car) => car.getDistance() === maxMovedDistance)
    .map((car) => car.getName())
    .join(', ');
};

const renderMovedState = (cars) => {
  let domElement = '';
  calculateMovedState(cars);

  cars.forEach((car) => {
    domElement += `<span>${car.getName()}: ${'-'.repeat(car.getDistance())}</span><br />`;
  });

  return domElement;
};

export const renderGameResult = (carNames, racingCount) => {
  let domElement = '';
  const cars = genCarInstances(carNames);

  for (let i = 0; i < racingCount; i++) {
    domElement += renderMovedState(cars);
    domElement += `<br />`;
  }
  domElement += `<span>최종 우승자: </span>`;
  domElement += `<span id="racing-winners">${getWinner(cars)}</span><br><br>`;
  $('#app').insertAdjacentHTML('beforeend', domElement);
};
