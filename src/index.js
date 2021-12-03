import Input from './input/index.js';
import { createElementWithContents } from './utils/common.js';
import {
  addCarNamesSubmitClickEvent,
  addRacingCountSubmitClickEvent,
  addRacingCountInputKeyupEvent,
} from './utils/add-events.js';
import { DOM } from './constants/index.js';

export default class RacingGame {
  constructor() {
    this.initGame();
    this.input = new Input();
    this.addEventListeners();
  }

  initGame() {
    const resultDiv = createElementWithContents('div');
    resultDiv.id = 'result';
    DOM.$racingCountSubmit.disabled = true;
    DOM.$racingCountInput.disabled = true;
    DOM.$app.appendChild(resultDiv);
  }

  addEventListeners() {
    addCarNamesSubmitClickEvent(this.input);
    addRacingCountSubmitClickEvent(this.input);
    addRacingCountInputKeyupEvent();
  }
}
new RacingGame();
