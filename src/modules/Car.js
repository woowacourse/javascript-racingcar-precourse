export default class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  getCarStatus = () => {
    return `<p>${this.name}: ${"-".repeat(this.step)}</p>`;
  };
}
