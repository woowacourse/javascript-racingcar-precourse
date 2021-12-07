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
    const carNamesInput = this.inputEl.value.split(',');
    if (!this.inputEl.value.length) {
      alert('자동차 이름이 없습니다.');
      return;
    }
    if (!carNamesInput.every((name) => name.length <= 5)) {
      alert('자동차 이름은 5자 이하입니다.');
      return;
    }
    if (carNamesInput.length !== new Set(carNamesInput).size) {
      alert('중복된 이름이 있습니다.');
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
}
