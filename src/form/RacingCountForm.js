import {
  $racingCountTitle,
  $racingCountInput,
  $racingCountSubmit,
} from '../constants/HTMLconstant.js';
import validRacingCount from '../validator/validRacingCount.js';

export default class RacingCountForm {
  constructor() {
    this.$title = $racingCountTitle;
    this.$input = $racingCountInput;
    this.$submit = $racingCountSubmit;
  }

  hide() {
    this.$title.style.display = 'none';
    this.$input.style.display = 'none';
    this.$submit.style.display = 'none';
  }

  show() {
    this.$title.style.display = '';
    this.$input.style.display = '';
    this.$submit.style.display = '';
  }

  getValidation() {
    return validRacingCount(this.$input.value);
  }
}
