import { NUMBER } from '../constants/constants.js';
import { Car } from '../domain/car.js';
import { state } from '../index.js';

export const makeNewCars = function (carNamesArray) {
  carNamesArray.forEach((name) => state.carArray.push(new Car(name)));
};

const generateRandomNumber = function () {
  const randomNumber = MissionUtils.Random.pickNumberInRange(
    NUMBER.RANDOM_NUMBER.MIN,
    NUMBER.RANDOM_NUMBER.MAX
  );

  return randomNumber;
};

export const addRandomPosition = function (racingCount) {
  for (let i = 0; i < racingCount; i++) {
    for (let j = 0; j < state.carArray.length; j++) {
      state.carArray[j].position.push(generateRandomNumber());
    }
  }
};

const filterPosition = function () {
  for (let i = 0; i < state.carArray.length; i++) {
    state.carArray[i].position = state.carArray[i].position.filter(
      (number) => number >= NUMBER.POSITION.CONDITION
    );
  }
};

const getWinnerPosition = function () {
  let winnerPosition = [];

  for (const car of state.carArray) {
    winnerPosition.push(car.position.length);
  }

  return Math.max(...winnerPosition);
};

export const decideWinner = function () {
  let winners = [];

  filterPosition();

  for (const car of state.carArray) {
    if (car.position.length === getWinnerPosition()) {
      winners.push(car.name);
    }
  }

  return winners;
};
