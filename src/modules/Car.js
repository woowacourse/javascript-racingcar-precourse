export default class Car {
  constructor(name) {
    this._name = name;
    this.step = 0;
  }

  getCarStatus = () => {
    return `<p>${this._name}: ${"-".repeat(this.step)}</p>`;
  };
}
