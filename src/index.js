import { handleCarNames } from './handleCarNames.js';
import { handleRacingCount } from './handleRacingCount.js';
import { hideElement } from './util.js';

export default function RacingCarGame() {
  const elements = getElements();

  insertGameResultContentElement(elements);
  setElementIDs(elements);
  hideRacingCount();
  hideGameResult();
  elements.carNamesInput.focus();
  elements.carNamesSubmit.addEventListener('click', handleCarNames);
  elements.racingCountSubmit.addEventListener('click', handleRacingCount);
}

const getElements = () => {
  return {
    carNamesInput: document.querySelector('#app input'),
    carNamesSubmit: document.querySelector('#app button'),
    racingCountInput: document.querySelectorAll('#app input')[1],
    racingCountSubmit: document.querySelectorAll('#app button')[1],
    racingCountHeader: document.querySelector('#app h4'),
    gameResultHeader: document.querySelectorAll('#app h4')[1],
  };
};

const setElementIDs = (elements) => {
  elements.carNamesInput.id = 'car-name-input';
  elements.carNamesSubmit.id = 'car-name-submit';
  elements.racingCountInput.id = 'racing-count-input';
  elements.racingCountSubmit.id = 'racing-count-submit';
  elements.racingCountHeader.id = 'racing-count-header';
  elements.gameResultHeader.id = 'game-result-header';
};

const insertGameResultContentElement = (elements) => {
  elements.gameResultHeader.insertAdjacentHTML(
    'afterend',
    '<div id="game-result-content"></div>'
  );
};

export const hideRacingCount = () => {
  hideElement('#racing-count-input');
  hideElement('#racing-count-submit');
  hideElement('#racing-count-header');
};

export const hideGameResult = () => {
  hideElement('#game-result-header');
  hideElement('#game-result-content');
};

new RacingCarGame();
