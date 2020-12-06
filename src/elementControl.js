import { checkCarName, checkCount } from './checkInput.js';

const carNameInput = document.querySelector('#car-names-input');
const carNameSubmit = document.querySelector('#car-names-submit');
const racingCountInput = document.querySelector('#racing-count-input');
const racingCountSubmit = document.querySelector('#racing-count-submit');

export const focusInput = target => {
  document.querySelector(target).focus();
};

export const clearValue = target => {
  document.querySelector(target).value = '';
};

const afterInputCarName = game => {
  const carNameChecked = checkCarName(carNameInput.value);
  if (carNameChecked) {
    showCountInput();
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
    showResult();
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

export const showCountInput = () => {
  const racingCountDiv = document.querySelector('#racing-count-div');
  const carNameInput = document.querySelector('#car-names-input');
  const carNameSubmit = document.querySelector('#car-names-submit');

  racingCountDiv.style.display = 'block';
  carNameInput.disabled = true;
  carNameSubmit.disabled = true;
};

export const showResult = () => {
  const resultDiv = document.querySelector('#result');
  const racingCountInput = document.querySelector('#racing-count-input');
  const racingCountSubmit = document.querySelector('#racing-count-submit');

  resultDiv.style.display = 'block';
  racingCountInput.disabled = true;
  racingCountSubmit.disabled = true;
};
