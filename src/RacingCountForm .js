import FormHandler from './FormHandler.js';
import { domId } from './share.js';

export default class RacingCountForm extends FormHandler {
  constructor(callback) {
    super(domId.racingCountInput, domId.racingCountSubmitBtn);
    this.setOnClick(callback);
  }

  checkValidCount = () => {
    this.count = Number(this.input.value);
    this.isValidCount = this.count > 0;
    return this.isValidCount;
  };
}
