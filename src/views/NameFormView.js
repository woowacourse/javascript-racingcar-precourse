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
    this.emit('@submit', { input: this.inputEl.value });
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
