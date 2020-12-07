import isCarMove from '../modules/move.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = '';
  }

  carMove() {
    if (isCarMove()) {
      return (this.distance += '-');
    }

    return null;
  }
}
