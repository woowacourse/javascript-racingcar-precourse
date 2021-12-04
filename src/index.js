import { submitCarNames } from './utils/submitCarNames.js';

export default class RacingGame {
  constructor() {
    this.carNames = [];
    this.$carNamesSubmit = document.querySelector('#car-names-submit');
    this.initEventListeners();
  }

  initEventListeners() {
    this.$carNamesSubmit.addEventListener('click', () => {
      this.carNames = submitCarNames();
      console.log(this.carNames);
    });
  }
}

new RacingGame();
