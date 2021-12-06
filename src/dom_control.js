import { RACING_WINNERS_TEXT } from './constants.js';
import {
  racingCountText,
  racingCountForm,
  racingResultText,
  racingCountSubmitButton,
  app,
} from './dom_element.js';

export const setInitialStyle = () => {
  racingCountText.style.display = 'none';
  racingCountForm.style.display = 'none';
  racingResultText.style.display = 'none';
};

export const displayCountForm = () => {
  racingCountText.style.display = 'block';
  racingCountForm.style.display = 'block';
};

export const displayResultText = () => {
  racingResultText.style.display = 'block';
};

export const createRacingLog = (cars) => {
  const _log = document.createElement('p');

  cars.forEach((car) => {
    _log.innerHTML += `${car.name}: ${'-'.repeat(car.location)} <br>`;
  });

  app.appendChild(_log);
};

export const createWinnersText = (winners) => {
  const _racingWinnersText = document.createElement('span');
  const _racingWinners = document.createElement('span');
  _racingWinners.setAttribute('id', 'racing-winners');

  _racingWinnersText.innerHTML = RACING_WINNERS_TEXT;
  _racingWinners.innerHTML = winners.join(', ');

  app.appendChild(_racingWinnersText);
  app.appendChild(_racingWinners);
};

export const endGame = () => {
  racingCountSubmitButton.disabled = 'disabled';
};
