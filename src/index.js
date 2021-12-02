import Input from './input/index.js';
import { addCarNamesSubmitClickEvent } from './utils/clickEvents.js';

export default class RacingGame {
  constructor() {
    this.input = new Input();
    this.addEventListeners();
  }

  addEventListeners() {
    addCarNamesSubmitClickEvent(this.input);
  }
}
new RacingGame();
