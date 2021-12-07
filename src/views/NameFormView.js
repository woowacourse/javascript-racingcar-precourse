import VALID_CHECK from '../utils/validation.js';

export default function NameFormView(el) {
  this.el = el;
  this.inputEl = this.el.querySelector('#car-names-input');
  this.submitEl = this.el.querySelector('#car-names-submit');
  this.init = () => {
    this.bindEvent();
    return this;
  };

  this.bindEvent = () => {
    this.submitEl.addEventListener('click', (e) => this.onClickSubmit(e));
  };

  this.onClickSubmit = (e) => {
    e.preventDefault();
    const carNamesInput = this.inputEl.value;
    if (!VALID_CHECK.checkValidCarName(carNamesInput)) {
      this.clearInput();
      return;
    }
    this.emit('@submit', { input: carNamesInput });
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
