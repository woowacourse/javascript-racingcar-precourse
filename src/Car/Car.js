export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  information = () => {
    return [this.name, this.distance];
  };

  resultString = () => {
    return `${this.name}: ${'-'.repeat(this.distance)}`.trim();
  };

  distanceIncrease = () => {
    this.distance += 1;
  };
}
