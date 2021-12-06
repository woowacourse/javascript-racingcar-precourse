import { MAX_LENGTH_CAR_NAME } from '../constant/game.js';

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

export {
  checkNameLength,
  checkEmptyName,
  checkDuplicateName,
};