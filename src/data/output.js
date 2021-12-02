import { genRandomNumber } from '../utils/genRandomNumber.js';
import { MOVE_CONDITION } from '../utils/constants.js';
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

const getMaxMovedDistance = (carNames) => {
  let maxMovedDistance = 0;
  carNames.forEach((car) => {
    if (car.distance > maxMovedDistance) maxMovedDistance = car.distance;
  });
  return maxMovedDistance;
};

const getWinner = (carNames) => {
  const winners = [];
  const maxMovedDistance = getMaxMovedDistance(carNames);
  carNames.forEach((car) => {
    if (car.distance === maxMovedDistance) {
      winners.push(car.name);
    }
  });
  return winners.join(',');
};

export const renderResult = (carNames, attemptCounts) => {
  for (let i = 0; i < attemptCounts; i++) {
    calculateMoveState(carNames);
    renderMoveState(carNames);
  }
  const winners = getWinner(carNames);
  const newSpan = document.createElement('span');
  newSpan.setAttribute('id', 'racing-winners');
  newSpan.innerHTML = winners;
  $('#app').appendChild(newSpan);
};
