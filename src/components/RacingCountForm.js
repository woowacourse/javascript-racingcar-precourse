import { $, $$ } from '../utils/dom.js';

class RacingCountForm {
  constructor() {
    // eslint-disable-next-line prefer-destructuring
    this.$title = $$('h4')[0];
    this.$input = $('#racing-count-input');
    this.$submit = $('#racing-count-submit');
    this.$tryCount = 0;
  }

  hide() {
    this.$input.style.display = 'none';
    this.$submit.style.display = 'none';
    this.$title.style.display = 'none';
  }

  render() {
    this.$input.style.display = '';
    this.$submit.style.display = '';
    this.$title.style.display = '';
  }
}

export default RacingCountForm;
