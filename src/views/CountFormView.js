import { ELEMENT_ID } from '../utils/constants.js';
import CarsModel from '../models/CarsModel.js';

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
    if (racingCountInput <= 0) {
      alert('잘못된 횟수 입력입니다.');
      return;
    }
    if (!CarsModel.getCars().length) {
      alert('자동차 이름을 먼저 입력해주세요.');
      return;
    }
    this.emit('@submit', { input: racingCountInput });
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
