export default class Car {
  constructor(name) {
    this._name = name;
    this._step = 0;
  }

  move = () => {
    this._step++;
  };

  getName = () => {
    return this._name;
  };

  getStep = () => {
    return this._step;
  };

  getCarStatus = () => {
    return `<p>${this._name}: ${"-".repeat(this._step)}</p>`;
  };
}
