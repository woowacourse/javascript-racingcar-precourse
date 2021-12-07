import { ELEMENT_IDS, WINNER_LABEL } from './constants.js';
import htmlToElement from './utils.js';

class RacingView {
  constructor() {
    this.bindCarNamesElements();
    this.bindRacingCountElements();
    const $app = document.querySelector(`#${ELEMENT_IDS.APP}`);
    this.insertRaceResultView($app);
  }

  bindCarNamesElements() {
    const { CAR_NAMES_INPUT, CAR_NAMES_SUBMIT } = ELEMENT_IDS;
    this.$carNamesInput = document.querySelector(`#${CAR_NAMES_INPUT}`);
    this.$carNamesSubmit = document.querySelector(`#${CAR_NAMES_SUBMIT}`);
  }

  bindRacingCountElements() {
    const { RACING_COUNT_INPUT, RACING_COUNT_SUBMIT } = ELEMENT_IDS;
    this.$racingCountInput = document.querySelector(`#${RACING_COUNT_INPUT}`);
    this.$racingCountSubmit = document.querySelector(`#${RACING_COUNT_SUBMIT}`);
  }

  insertRaceResultView($app) {
    this.insertRacingScreen($app);
    this.insertRacingWinner($app);
  }

  insertRacingScreen($app) {
    const screen = htmlToElement(
      `<div id="${ELEMENT_IDS.RACING_SCREEN}"></div>`
    );
    $app.insertAdjacentElement('beforeend', screen);
    this.$racingScreen = screen;
  }

  insertRacingWinner($app) {
    const element = htmlToElement(
      `<span id="${ELEMENT_IDS.RACING_WINNERS}"></span>`
    );
    $app.insertAdjacentElement('beforeend', element);
    this.$racingWinners = element;
  }

  printCurrentPosition(cars) {
    let ul = '<ul>';
    cars.forEach((car) => {
      ul += `<li>${car.name}: ${'-'.repeat(car.position)}</li>`;
    });
    ul += '</ul>';
    this.$racingScreen.insertAdjacentElement('beforeend', htmlToElement(ul));
  }

  printWinners(winners) {
    this.$racingWinners.insertAdjacentElement(
      'beforebegin',
      htmlToElement(`<label>${WINNER_LABEL}: </label>`)
    );
    this.$racingWinners.innerText = `${winners.join(',')}`;
  }

  resetResultView() {
    this.$racingScreen.replaceChildren();
    if (this.$racingWinners.previousSibling.nodeName === 'LABEL') {
      this.$racingWinners.previousSibling.remove();
    }
    this.$racingWinners.replaceChildren();
  }
}

export default RacingView;
