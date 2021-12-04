export default class Render {
  constructor() {
    this.resultTitle = document.querySelector('#result-title');
    this.resultContainer = document.querySelector('#result-container');
    this.resetResult();
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
