export default class Car {
  constructor(name, position = 0) {
    this._name = name;
    this._position = position;
  }

  getName() {
    return this._name;
  }

  getPosition() {
    return this._position;
  }

  move() {
    this._position += 1;
  }

  clearPosition() {
    this._position = 0;
  }
}
