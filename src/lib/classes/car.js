export default class Car {
  constructor(name) { 
    this.name = name;
    this.result = [];
    this.pos = [];
    this.isWin = false;
  }

  _canGo(randomNumber) {
    return randomNumber > 3;
  }

  _getCurrentPos() {
    return this.result.filter(go => go === true).length;
  }

  isWinThisCar(maxDist) {
    return this.isWin = this.pos[this.pos.length-1] === maxDist;
  }

  play(randomNumber) {
    this.result.push(this._canGo(randomNumber));
    this.pos.push(this._getCurrentPos());
  }
}
