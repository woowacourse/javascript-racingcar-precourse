import { NUMBER } from '../constants/constants.js';
import { Car } from '../domain/car.js';
import { state } from '../index.js';
import { generateRandomNumber } from './util.js';

export const makeNewCars = function (carNamesArray) {
  carNamesArray.forEach((name) => state.carArray.push(new Car(name)));
};

export const addRandomNumberToPosition = function (racingCount) {
  for (let i = 0; i < racingCount; i++) {
    for (let j = 0; j < state.carArray.length; j++) {
      state.carArray[j].position.push(generateRandomNumber());
    }
  }
};

const filterPositionArray = function () {
  for (let i = 0; i < state.carArray.length; i++) {
    state.carArray[i].position = state.carArray[i].position.filter(
      (number) => number >= NUMBER.POSITION.CONDITION
    );
  }
};

const getWinnerPositionLength = function () {
  let winnerPosition = [];

  for (const car of state.carArray) {
    winnerPosition.push(car.position.length);
  }

  return Math.max(...winnerPosition);
};

export const decideWinner = function () {
  let winners = [];

  filterPositionArray();

  for (const car of state.carArray) {
    if (car.position.length === getWinnerPositionLength()) {
      winners.push(car.name);
    }
  }

  return winners;
};
