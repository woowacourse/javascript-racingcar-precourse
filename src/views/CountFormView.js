import { ELEMENT_ID, EVENT_TYPE } from '../utils/constants.js';
import VALID_CHECK from '../utils/validation.js';

export default function NameFormView(el) {
  this.el = el;
  this.inputEl = this.el.querySelector(ELEMENT_ID.racingCountInput);
  this.submitEl = this.el.querySelector(ELEMENT_ID.racingCountSubmit);
  this.init = () => {
    this.bindEvent();
    return this;
  };

  this.bindEvent = () => {
    this.submitEl.addEventListener('click', (e) => this.onClickSubmit(e));
  };

  this.onClickSubmit = (e) => {
    e.preventDefault();
    const racingCountInput = this.inputEl.value;
    if (!VALID_CHECK.checkValidRacingCount(racingCountInput)) {
      this.clearInput();
      return;
    }
    this.emit(EVENT_TYPE.SUBMIT, { input: racingCountInput });
  };

  this.on = (event, handler) => {
    this.el.addEventListener(event, handler);
    return this;
  };

  this.emit = (event, data) => {
    const e = new CustomEvent(event, { detail: data });
    this.el.dispatchEvent(e);
    return this;
  };

  this.clearInput = () => {
    this.inputEl.value = '';
    this.inputEl.focus();
  };
}
