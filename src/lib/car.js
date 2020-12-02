export default class Car {
  constructor(name) {
		this.name = name;
		this.result = [];
  }

  _runOrPause(randomNumber, turn) {
    if(randomNumber > 3) return this.result.push(turn);
  }
}