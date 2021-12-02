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

const renderMoveState = (carNames) => {
  let state = '';
  const newDiv = document.createElement('div');
  carNames.forEach((car) => {
    state += `<span>${car.name}: ${'-'.repeat(car.distance)}</span><br />`;
  });
  state += `<br />`;
  newDiv.innerHTML = state;
  $('#app').appendChild(newDiv);
};

export const renderResult = (carNames, attemptCounts) => {
  for (let i = 0; i < attemptCounts; i++) {
    calculateMoveState(carNames);
    renderMoveState(carNames);
  }
};
