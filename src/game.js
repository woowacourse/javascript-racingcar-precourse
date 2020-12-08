export class Game {
  constructor() {
    this.forward = new Array();
    this.instanceOfCars = new Array();
  }

  goForward(numTry) {
    for (let i = 0; i < this.instanceOfCars.length; i += 1) {
      this.forward[i] = '';
    }
    for (let i = 0; i < numTry; i += 1) {
      for (let j = 0; j < this.instanceOfCars.length; j += 1) {
        const eachRace = document.getElementById('result');
        if (this.instanceOfCars[j].getRandomNumber() > 3) {
          this.forward[j] += '-';
        }
        eachRace.innerHTML = `${eachRace.innerHTML} ${this.instanceOfCars[j].name} : ${this.forward[j]} <br />`;
      }
      document.getElementById('result').innerHTML = `${document.getElementById('result').innerHTML} <br />`;
    }
  }

  findWinner(arr) {
    const winner = new Array();
    const eachLength = arr.map(x => x.length);
    const maxNum = Math.max(...eachLength);

    for (let i = 0; i < eachLength.length; i += 1) {
      if (eachLength[i] === maxNum) {
        winner.push(this.instanceOfCars[i].name);
      }
    }
    document.getElementById('result').innerHTML = `${document.getElementById('result').innerHTML} 최종 우승자: ${winner}`;
  }
}
