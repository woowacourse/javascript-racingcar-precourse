import {
  MAX_LENGTH_CAR_NAME,
  MIN_COUNT_CAR,
  MIN_RANGE_RACING_COUNT,
} from '../constant/game.js';

const checkNameLength = (carNames) => {
  const isPass = carNames.every((name) => name.length <= MAX_LENGTH_CAR_NAME);

  return isPass;
};

const checkEmptyName = (carNames) => {
  const isPass = carNames.every((name) => name !== '');

  return isPass;
};

const checkDuplicateName = (carNames) => {
  const originLength = carNames.length;
  const { size } = new Set(carNames);

  const isPass = originLength === size;

  return isPass;
};

const checkExistingCar = (cars) => {
  const isPass = cars.length >= MIN_COUNT_CAR;

  return isPass;
};

const checkValidNumber = (racingCount) => {
  const isPass =
    racingCount >= MIN_RANGE_RACING_COUNT &&
    Number.isInteger(Number(racingCount));

  return isPass;
};

export {
  checkNameLength,
  checkEmptyName,
  checkDuplicateName,
  checkExistingCar,
  checkValidNumber,
};
