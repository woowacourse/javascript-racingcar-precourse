import {GO_AHEAD_MAX_VALUE} from "../variables/constantNumbers.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.result = [];
    this.pos = [];
    this.maxDist = 0;
  }

  _canGo(randomNumber) {
    return randomNumber > 3;
  }

  _createRandomNumber() {
    return Math.floor(Math.random() * (GO_AHEAD_MAX_VALUE + 1));
  }

  _getCurrentPos() {
    return this.result.filter((go) => go === true).length;
  }

  isWin(maxDist, racingCount) {
    return this.pos[racingCount-1] === maxDist;
  }

  play() {
    const randomNumber = this._createRandomNumber();
    const curDist = this._getCurrentPos();
    this.result.push(this._canGo(randomNumber));
    this.pos.push(curDist);
  }
}
