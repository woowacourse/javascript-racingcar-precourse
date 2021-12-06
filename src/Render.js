import { INPUT_GUIDE_MESSAGE, INPUT_GUIDE_COLOR } from './constants/index.js';

export default class Render {
  constructor() {
    this.initResults();
    this.initGuides();
  }

  initResults() {
    this.resultTitle = document.querySelector('#result-title');
    this.resultContainer = document.querySelector('#result-container');
    this.resetResult();
  }

  initGuides() {
    this.carNamesGuide = document.querySelector('#car-names-guide');
    this.racingCountGuide = document.querySelector('#racing-count-guide');
    this.carNamesGuideUnverified();
    this.racingCountGuideUnverified();
  }

  resetResult() {
    this.hideResultTitle();
    this.resultContainer.innerHTML = '';
  }

  hideResultTitle() {
    this.resultTitle.hidden = true;
  }

  showResultTitle() {
    this.resultTitle.hidden = false;
  }

  racingCountGuideVerified() {
    this.racingCountGuide.innerText = INPUT_GUIDE_MESSAGE.VERIFIED;
    this.racingCountGuide.setAttribute('style', `color: ${INPUT_GUIDE_COLOR.VERIFIED}`);
  }

  racingCountGuideUnverified() {
    this.racingCountGuide.innerText = INPUT_GUIDE_MESSAGE.UNVERIFIED;
    this.racingCountGuide.setAttribute('style', `color: ${INPUT_GUIDE_COLOR.UNVERIFIED}`);
  }

  carNamesGuideVerified() {
    this.carNamesGuide.innerText = INPUT_GUIDE_MESSAGE.VERIFIED;
    this.carNamesGuide.setAttribute('style', `color: ${INPUT_GUIDE_COLOR.VERIFIED}`);
  }

  carNamesGuideUnverified() {
    this.carNamesGuide.innerText = INPUT_GUIDE_MESSAGE.UNVERIFIED;
    this.carNamesGuide.setAttribute('style', `color: ${INPUT_GUIDE_COLOR.UNVERIFIED}`);
  }

  racingState(round, states) {
    const racingStateContainer = document.createElement('p');
    racingStateContainer.setAttribute('id', `racing-state-${round}`);

    states.forEach((state) => {
      racingStateContainer.innerHTML += `${state} <br />`;
    });

    this.resultContainer.appendChild(racingStateContainer);
  }

  winners(winnerNames) {
    const winnerName = winnerNames.join(',');
    const winnerContainer = document.createElement('p');
    const winnerNameContainer = document.createElement('span');

    winnerContainer.setAttribute('id', 'racing-final');
    winnerNameContainer.setAttribute('id', 'racing-winners');
    winnerContainer.innerText = '최종 우승자: ';
    winnerNameContainer.innerText = winnerName;

    winnerContainer.appendChild(winnerNameContainer);
    this.resultContainer.appendChild(winnerContainer);
  }
}
