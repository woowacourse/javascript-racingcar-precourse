import { MAX_NUMBER, MIN_NUMBER } from '../constants/constants.js';
import { state } from '../index.js';

export const makeNewCars = function (carNamesArray) {
  carNamesArray.forEach((name) => state.carArray.push(new carNamesArray(name)));
};

export const generateRandomNumber = function () {
  const randomNumber = MissionUtils.Random.pickNumberInRange(
    MIN_NUMBER,
    MAX_NUMBER
  );

  return randomNumber;
};

export const addRandomPosition = function (racingCount) {
  for (let i = 0; i < racingCount; i++) {
    for (let j = 0; j < state.carArray.length; j++) {
      state.carArray[j].position.push(getRandomNumber());
    }
  }
};
