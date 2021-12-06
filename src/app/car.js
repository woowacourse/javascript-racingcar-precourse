import { MINUS_SIGN, PLAIN_STRING } from '../lib/constants.js';

class Car {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.countTemplate = PLAIN_STRING;
    this.count = 0;
  }

  setCountTemplatePlusOne() {
    this.countTemplate = `${this.countTemplate}${MINUS_SIGN}`;
  }

  setCountPlusOne() {
    this.count = this.count + 1;
  }
}
export default Car;
