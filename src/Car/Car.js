export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  resultString = () => {
    return `${this.name}: ${'-'.repeat(this.distance)}`.trim();
  };

  distanceIncrease = () => {
    this.distance += 1;
  };
}
