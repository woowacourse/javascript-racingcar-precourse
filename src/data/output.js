import genRandomNumber from '../utils/genRandomNumber.js';
import { MOVE_CONDITION } from './constatns.js';
import { $ } from '../utils/dom.js';

export const getCarNames = (carNames) => {
  return carNames;
};

const calculateMoveState = (carNames) => {
  carNames.forEach((car) => {
    if (genRandomNumber() >= MOVE_CONDITION) {
      car.move();
    }
  });
};
