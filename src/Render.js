import InputGuide from './InputGuide.js';

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
    this.carNamesGuide = new InputGuide('car-names');
    this.racingCountGuide = new InputGuide('racing-count');
    this.carNamesGuideUnverified();
    this.racingCountGuideUnverified();
  }

  resetResult() {
    this.hideResultTitle();
    this.resultContainer.innerHTML = '';
  }

  hideResultTitle() { this.resultTitle.hidden = true; }

  showResultTitle() { this.resultTitle.hidden = false; }

  carNamesGuideVerified() { this.carNamesGuide.setVerified(); }

  carNamesGuideUnverified() { this.carNamesGuide.setUnverified(); }

  racingCountGuideVerified() { this.racingCountGuide.setVerified(); }

  racingCountGuideUnverified() { this.racingCountGuide.setUnverified(); }

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
