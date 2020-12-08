import { checkCarName, checkCount } from './checkInput.js';

const carNameInput = document.querySelector('#car-names-input');
const carNameSubmit = document.querySelector('#car-names-submit');
const racingCountInput = document.querySelector('#racing-count-input');
const racingCountSubmit = document.querySelector('#racing-count-submit');
const racingCountDiv = document.querySelector('#racing-count-div');
const resultDiv = document.querySelector('#result');

const focusInput = target => {
  document.querySelector(target).focus();
};

const clearValue = target => {
  document.querySelector(target).value = '';
};

const afterInputCarName = game => {
  const carNameChecked = checkCarName(carNameInput.value);
  if (carNameChecked) {
    showCountInputDiv();
    game.carNames = game.carNames.concat(carNameChecked);
    focusInput('#racing-count-input');
  } else {
    clearValue('#car-names-input');
    focusInput('#car-names-input');
  }
};

const afterInputCount = game => {
  const countChecked = checkCount(racingCountInput.value);
  if (countChecked) {
    showResultDiv();
    game.countValue = countChecked;
    game.setCars();
  } else {
    clearValue('#racing-count-input');
    focusInput('#racing-count-input');
  }
};

export const setEventListener = game => {
  carNameSubmit.addEventListener('click', () => afterInputCarName(game));
  carNameInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      afterInputCarName(game);
    }
  });
  racingCountSubmit.addEventListener('click', () => afterInputCount(game));
  racingCountInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      afterInputCount(game);
    }
  });
};

const showCountInputDiv = () => {
  racingCountDiv.style.display = 'block';
  carNameInput.disabled = true;
  carNameSubmit.disabled = true;
};

const showResultDiv = () => {
  resultDiv.style.display = 'block';
  racingCountInput.disabled = true;
  racingCountSubmit.disabled = true;
};

export const showRacing = cars => {
  const racingResult = document.createElement('p');
  for (let car of cars) {
    const distace = '-'.repeat(car.distance);
    racingResult.innerHTML += `${car.name}: ${distace}<br />`;
  }
  resultDiv.appendChild(racingResult);
};

export const showWinners = winners => {
  const winnerResult = document.createElement('p');
  let winnerHTML = '최종 우승자: ';
  for (let winner of winners) {
    winnerHTML += `${winner}, `;
  }
  winnerHTML = winnerHTML.slice(0, -2);
  winnerResult.innerHTML = winnerHTML;
  resultDiv.appendChild(winnerResult);
};
