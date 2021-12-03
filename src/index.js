import { ID_APP } from './dom/const.js';

export default class RacingGame {
  constructor() {
    this.app = document.getElementById(ID_APP);

    this.app.onclick = this.onClick.bind(this);

    this.cars = [];
    this.racingCount = 0;
  }

  onClick(event) {
    const { action } = event.target.dataset;

    if (action) {
      this[action](event);
    }
  }
}

new RacingGame();
