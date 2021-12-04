import { RACING_WINNERS_TEXT } from './constants.js';
import {
  racingCountText,
  racingCountForm,
  racingResultText,
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
  const log = document.createElement('p');

  cars.forEach((car) => {
    log.innerHTML += `${car.name}: ${'-'.repeat(car.location)} <br>`;
  });

  app.appendChild(log);
};

export const createWinnersText = (winners) => {
  const racingWinnersText = document.createElement('span');
  const racingWinners = document.createElement('span');
  racingWinners.setAttribute('id', 'racing-winners');

  racingWinnersText.innerHTML = RACING_WINNERS_TEXT;
  racingWinners.innerHTML = winners.join(', ');

  app.appendChild(racingWinnersText);
  app.appendChild(racingWinners);
};
