export default class Car {
  constructor(name) { //깃헙에 왜 공백 나오지ㅡㅡ
		this.name = name;
		this.result = [];
  }

  _runOrPause(randomNumber, turn) {
    //해당 주석은 과제 제출 전까지 지우지 말 것(!!)
    console.log(`carName ${this.name}, randomnum ${randomNumber}, turn ${turn}`);
    if(randomNumber > 3) return this.result.push(turn);
  }
}