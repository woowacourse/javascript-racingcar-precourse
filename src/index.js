import Input from './input/index.js';
import { $, createElementWithContents } from './utils/common.js';
import {
  addCarNamesSubmitClickEvent,
  addRacingCountSubmitClickEvent,
  addRacingCountInputKeyupEvent,
} from './utils/add-events.js';

export default class RacingGame {
  constructor() {
    this.initGame();
    this.input = new Input();
    this.addEventListeners();
  }

  initGame() {
    const resultDiv = createElementWithContents('div');
    resultDiv.id = 'result';
    $('racing-count-submit').disabled = true;
    $('app').appendChild(resultDiv);
  }

  addEventListeners() {
    addCarNamesSubmitClickEvent(this.input);
    addRacingCountSubmitClickEvent(this.input);
    addRacingCountInputKeyupEvent();
  }
}
new RacingGame();
