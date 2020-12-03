class State {
  #renders;
  _value;

  constructor(initialValue) {
    this._value = initialValue;
    this.#renders = new Set();
  }

  renderAll() {
    this.#renders.forEach(render => render());
  }

  subscribe(render) {
    if (typeof render === 'function') {
      this.#renders.add(render);
    }
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
    this.renderAll();
  }
}

export default State;
