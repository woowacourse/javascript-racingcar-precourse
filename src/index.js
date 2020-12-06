import { handleCarNames } from './handleCarNames.js';
import { handleRacingCount } from './handleRacingCount.js';
import { hideElement } from './util.js';
import {
  carNamesSubmitButton,
  racingCountInputElement,
  racingCountSubmitButton,
  racingCountHeader,
  gameResultHeader,
  setElementsId,
} from './config.js';

export default function RacingCarGame() {
  setElementsId();
  insertGameResultElement();
  hideElementsOfNextSteps();

  carNamesSubmitButton.addEventListener('click', handleCarNames);
  racingCountSubmitButton.addEventListener('click', handleRacingCount);
}

const insertGameResultElement = () => {
  gameResultHeader.insertAdjacentHTML(
    'afterend',
    '<div id="game-result-content"></div>'
  );
};

const hideElementsOfNextSteps = () => {
  hideElement(`#${racingCountInputElement.id}`);
  hideElement(`#${racingCountSubmitButton.id}`);
  hideElement(`#${racingCountHeader.id}`);
  hideElement(`#${gameResultHeader.id}`);
};

new RacingCarGame();
