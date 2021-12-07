import { validator } from '../validation/validator.js';

export default class RacingCountForm {
  constructor(input, submit) {
    this.$input = input;
    this.$submit = submit;
  }

  initValue = () => {
    this.$input.value = '';
  };

  getValue = () => this.$input.value.replace(/ /gi, '');

  validateInput = () => validator.validate('racingCount', this.getValue());
}
