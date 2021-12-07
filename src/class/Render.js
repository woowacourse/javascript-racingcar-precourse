import {
  ID_APP,
  ID_RSULT,
  ID_RACING_WINNERS_TITLE,
  ID_RACING_WINNERS,
} from '../constant/selector.js';

export default class Render {
  constructor() {
    this.$app = document.getElementById(ID_APP);
  }

  addElement() {
    this.addResultElement();
    this.addRacingWinnersTitleElement();
    this.addRacingWinnersElement();
  }

  addResultElement() {
    const $result = document.createElement('div');
    $result.setAttribute('id', ID_RSULT);
    $result.setAttribute('hidden', true);
    
    this.$app.appendChild($result);

    this.$result = $result;
  }

  addRacingWinnersTitleElement() {
    const $racingWinnersTitle = document.createElement('span');
    $racingWinnersTitle.setAttribute('id', ID_RACING_WINNERS_TITLE,);
    $racingWinnersTitle.setAttribute('hidden', true);
    this.$app.appendChild($racingWinnersTitle);

    this.$racingWinnersTitle = $racingWinnersTitle
  }

  addRacingWinnersElement() {
    const $racingWinners = document.createElement('span');
    $racingWinners.setAttribute('id', ID_RACING_WINNERS);
    $racingWinners.setAttribute('hidden', true);
    this.$app.appendChild($racingWinners);

    this.$racingWinners = $racingWinners;
  }

  renderRacingWinner(winenrList) {
    this.$racingWinnersTitle.textContent = '최종 우승자: ';
    this.$racingWinners.textContent = winenrList.join(',');
  }

  renderMoveResult(car) {
    const $div = document.createElement('div');
    $div.textContent = `${car.getName()}: ${'-'.repeat(car.getNumMove())}`

    this.$result.appendChild($div);
  }

  renderNewLine() {
    const $br = document.createElement('br');
    this.$result.appendChild($br);
  }

  displayResult() {
    this.$result.removeAttribute('hidden');
    this.$racingWinnersTitle.removeAttribute('hidden');
    this.$racingWinners.removeAttribute('hidden');
  }

  initializeResult() {
    this.$result.innerHTML = '';
    this.$racingWinnersTitle.textContent = '';
    this.$racingWinners.textContent = '';

    this.$result.setAttribute('hidden', true);
    this.$racingWinnersTitle.setAttribute('hidden', true);
    this.$racingWinners.setAttribute('hidden', true);
  }
}
