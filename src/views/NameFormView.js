import { ELEMENT_ID, EVENT_TYPE } from '../utils/constants.js';
import VALID_CHECK from '../utils/validation.js';
import View from './View.js';

const NameFormView = { ...View };

NameFormView.setup = function (el) {
  this.init(el);
  this.inputEl = this.el.querySelector(ELEMENT_ID.carNamesInput);
  this.submitEl = this.el.querySelector(ELEMENT_ID.carNamesSubmit);
  this.bindEvent();
  return this;
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
NameFormView.clearInput = function () {
  this.inputEl.value = '';
  this.inputEl.focus();
};

export default NameFormView;
