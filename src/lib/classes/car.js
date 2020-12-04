export default class Car {
  constructor(name) { 
    this.name = name;
    this.result = [];
    this.pos = [];
  }

  _canGo(randomNumber) {
    return randomNumber > 3;
  }

  _getCurrentPos() {
    return this.result.filter(go => go === true).length;
  }

  _play(randomNumber, turn) {
    //해당 주석은 과제 제출 전까지 지우지 말 것(!!)
    console.log(`carName ${this.name}, random ${randomNumber}, turn ${turn}, ${this.result}`);
    this.result.push(this._canGo(randomNumber));
    this.pos.push(this._getCurrentPos());
  }
}
