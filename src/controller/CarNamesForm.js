import { validator } from '../validation/validator.js';

export default class CarNamesForm {
  constructor(input, submit) {
    this.$input = input;
    this.$submit = submit;
  }

  initValue = () => {
    this.$input.value = '';
  };

  getValue = () => this.$input.value;

  validateInput = () => validator.validate('rawInput', this.getValue());
}
