import { ELEMENT_ID, EVENT_TYPE } from '../utils/constants.js';
import VALID_CHECK from '../utils/validation.js';
import View from './View.js';

const CountFormView = { ...View };

CountFormView.setup = function (el) {
  this.init(el);
  this.inputEl = this.el.querySelector(ELEMENT_ID.racingCountInput);
  this.submitEl = this.el.querySelector(ELEMENT_ID.racingCountSubmit);
  this.bindEvent();
  return this;
};

CountFormView.bindEvent = function () {
  this.submitEl.addEventListener('click', (e) => this.onClickSubmit(e));
};
CountFormView.onClickSubmit = function (e) {
  e.preventDefault();
  const racingCountInput = this.inputEl.value;
  if (!VALID_CHECK.checkValidRacingCount(racingCountInput)) {
    this.clearInput();
    return;
  }
  this.emit(EVENT_TYPE.SUBMIT, { input: racingCountInput });
};

CountFormView.clearInput = function () {
  this.inputEl.value = '';
  this.inputEl.focus();
};

export default CountFormView;
