export default class Car {
  _racingDistance = 0;
  _racerPosition = '';

  constructor(name) {
    this._name = name;
  }

  randomSpeed() {
    return Math.floor(Math.random() * 10);
  }

  go() {
    this._racingDistance += 1;
    return '-';
  }

  stop() {
    return '';
  }

  race() {
    const _speed = this.randomSpeed();
    this._racerPosition += _speed >= 4 ? this.go() : this.stop();
  }

  get name() {
    return this._name;
  }

  get racingDistance() {
    return this._racingDistance;
  }

  get racerPosition() {
    return this._racerPosition;
  }
}
