import { $App } from '../data/domElement.js';

export default class RacingGameView {
  constructor() {
    this.gameResult = [];
  }

  setGameResult(gameResult) {
    this.gameResult = gameResult;
  }

  roundScoreTemplate(roundScore) {
    let liTemplate = '';
    for (let car in roundScore) {
      liTemplate += `<li style="list-style: none;">${car}: ${'-'.repeat(roundScore[car])}</li>`;
    }

    return `<ul style="padding: 0;">${liTemplate}</ul>`;
  }

  getWinnerList() {
    const finalScore = this.gameResult[this.gameResult.length - 1];
    let winnerList = [];
    let maxScore = Math.max(...Object.values(finalScore));

    for (let car in finalScore) {
      if (maxScore === finalScore[car]) {
        winnerList.push(car);
      }
    }

    return winnerList.join(', ');
  }

  winnerTemplate() {
    return `<span>최종 우승자: </span><span id="racing-winners">${this.getWinnerList()}</span>`;
  }

  gameResultTemplate() {
    let resultTemplate = '';
    this.gameResult.forEach(roundScore => {
      resultTemplate += this.roundScoreTemplate(roundScore);
    });

    return resultTemplate + this.winnerTemplate();
  }

  renderRoundScroe() {
    $App.insertAdjacentHTML('beforeend', this.gameResultTemplate());
  }
}
