import { $$ } from '../utils/dom.js';

class RacingResult {
  constructor() {
    // eslint-disable-next-line prefer-destructuring
    this.$title = $$('h4')[1];
  }

  hide() {
    this.$title.style.display = 'none';
  }

  show() {
    this.$title.style.display = '';
  }
}

export default RacingResult;
