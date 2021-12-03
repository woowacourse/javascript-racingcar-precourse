import { isValidCarNames, isValidRacingCount } from './validations.js';

function onSubmitCarNames(input, racingGame) {
  const carNames = input.value.split(',');
  racingGame.resetResult();
  if (!isValidCarNames(carNames)) {
    racingGame.setCarNames([]);
    return;
  }
  racingGame.setCarNames(carNames);
  if (racingGame.isReadyForGame()) racingGame.play();
}

function onSubmitRacingCount(input, racingGame) {
  const racingCount = Number(input.value);
  racingGame.resetResult();
  if (!isValidRacingCount(racingCount)) {
    racingGame.setRacingCount(0);
    return;
  }
  racingGame.setRacingCount(racingCount);
  if (racingGame.isReadyForGame()) racingGame.play();
}

export default function initForms(racingGame) {
  const carNamesInput = document.querySelector('#car-names-input');
  const racingCountInput = document.querySelector('#racing-count-input');
  const carNamesSubmitButton = document.querySelector('#car-names-submit');
  const racingCountSubmitButton = document.querySelector('#racing-count-submit');
  carNamesSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    onSubmitCarNames(carNamesInput, racingGame);
  });
  racingCountSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    onSubmitRacingCount(racingCountInput, racingGame);
  });
}
