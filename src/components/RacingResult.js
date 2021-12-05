import { $, $$ } from '../utils/dom.js';

class RacingResult {
  constructor() {
    // eslint-disable-next-line prefer-destructuring
    this.$title = $$('h4')[1];
  }

  createDOM() {
    const racingCarResultContainer = document.createElement('div');
    racingCarResultContainer.id = 'racing-car-result-container';
    $('#app').appendChild(racingCarResultContainer);
  }

  hide() {
    this.$title.style.display = 'none';
  }

  show() {
    this.$title.style.display = '';
  }
}

export default RacingResult;
