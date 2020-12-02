export default class Car {
  constructor(name) { //깃헙에 왜 공백 나오지ㅡㅡ
		this.name = name;
		this.result = [];
  }

  _runOrPause(randomNumber, turn) {
    if(randomNumber > 3) return this.result.push(turn);
  }
}