// eslint-disable-next-line import/extensions
import { getRandomNumber } from '../functions/index.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  simulate() {
    if (getRandomNumber() >= 4) this.location += 1;
  }

  toString() {
    let str = `${this.name}: `;
    for (let i = 0; i < this.location; i += 1) {
      str += '-';
    }
    return str;
  }

  getLocation() {
    return this.location;
  }

  setLocation(location) {
    this.location = location;
  }

  getName() {
    return this.name;
  }
}
