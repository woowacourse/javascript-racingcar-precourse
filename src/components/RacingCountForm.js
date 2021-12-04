import { $, $$ } from '../utils/dom.js';

class RacingCountForm {
  constructor() {
    this.$input = $('#racing-count-input');
    this.$submit = $('#racing-count-submit');
    // eslint-disable-next-line prefer-destructuring
    this.$title = $$('h4')[0];
  }

  hide() {
    this.$input.style.display = 'none';
    this.$submit.style.display = 'none';
    this.$title.style.display = 'none';
  }

  show() {
    this.$input.style.display = '';
    this.$submit.style.display = '';
    this.$title.style.display = '';
  }
}

export default RacingCountForm;
