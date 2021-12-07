/* eslint-disable import/extensions */
import { getRandomNumber } from '../functions/index.js';
import constants from '../constants/index.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  simulate() {
    if (getRandomNumber() >= constants.MAX_RACE_LIMIT_INT) this.location += 1;
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
