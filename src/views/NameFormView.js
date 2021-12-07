import { ELEMENT_ID, EVENT_TYPE } from '../utils/constants.js';
import VALID_CHECK from '../utils/validation.js';

const NameFormView = {};
NameFormView.setup = function (el) {
  this.init(el);
  this.inputEl = this.el.querySelector(ELEMENT_ID.carNamesInput);
  this.submitEl = this.el.querySelector(ELEMENT_ID.carNamesSubmit);
  this.bindEvent();
  return this;
};
NameFormView.init = function (el) {
  this.el = el;
};
NameFormView.bindEvent = function () {
  this.submitEl.addEventListener('click', (e) => this.onClickSubmit(e));
};
NameFormView.onClickSubmit = function (e) {
  e.preventDefault();
  const carNamesInput = this.inputEl.value;
  if (!VALID_CHECK.checkValidCarName(carNamesInput)) {
    this.clearInput();
    return;
  }
  this.emit(EVENT_TYPE.SUBMIT, { input: carNamesInput.split(',') });
};
NameFormView.on = function (event, handler) {
  this.el.addEventListener(event, handler);
  return this;
};

NameFormView.emit = function (event, data) {
  const e = new CustomEvent(event, { detail: data });
  this.el.dispatchEvent(e);
  return this;
};

NameFormView.clearInput = function () {
  this.inputEl.value = '';
  this.inputEl.focus();
};

export default NameFormView;
