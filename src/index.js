import removeChildrenByTagName from './dom/utils/removeChildrenByTag.js';
import generateCarNamesForm from './dom/generateCarNamesForm.js';
import { ID_APP } from './dom/const.js';

export default class RacingGame {
  constructor() {
    this.app = document.getElementById(ID_APP);
    this.app.onclick = this.onClick.bind(this);
    this.init();

    this.cars = [];
    this.racingCount = 0;
  }

  init() {
    removeChildrenByTagName(this.app, 'form');
    removeChildrenByTagName(this.app, 'h4');

    this.app.appendChild(generateCarNamesForm());
  }

  onClick(event) {
    const { action } = event.target.dataset;

    if (action) {
      this[action](event);
    }
  }
}

new RacingGame();
