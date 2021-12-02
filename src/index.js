import Input from './input/index.js';
import { $ } from './utils/common.js';
import {
  addCarNamesSubmitClickEvent,
  addRacingCountSubmitClickEvent,
  addRacingCountInputKeydownEvent,
} from './utils/add-events.js';

export default class RacingGame {
  constructor() {
    this.input = new Input();
    this.addEventListeners();
    $('racing-count-submit').disabled = true;
  }

  addEventListeners() {
    addCarNamesSubmitClickEvent(this.input);
    addRacingCountSubmitClickEvent(this.input);
    addRacingCountInputKeydownEvent();
  }
}
new RacingGame();
