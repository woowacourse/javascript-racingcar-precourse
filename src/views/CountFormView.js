import { ELEMENT_ID, EVENT_TYPE } from '../utils/constants.js';
import VALID_CHECK from '../utils/validation.js';

const CountFormView = {};
CountFormView.setup = function (el) {
  this.init(el);
  this.inputEl = this.el.querySelector(ELEMENT_ID.racingCountInput);
  this.submitEl = this.el.querySelector(ELEMENT_ID.racingCountSubmit);
  this.bindEvent();
  return this;
};
CountFormView.init = function (el) {
  this.el = el;
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
CountFormView.on = function (event, handler) {
  this.el.addEventListener(event, handler);
  return this;
};
CountFormView.emit = function (event, data) {
  const e = new CustomEvent(event, { detail: data });
  this.el.dispatchEvent(e);
  return this;
};
CountFormView.clearInput = function () {
  this.inputEl.value = '';
  this.inputEl.focus();
};

export default CountFormView;
