export default class PlayUtils {
  constructor() {
    this._displayArea = document.getElementById('displayArea');
  }
  
  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  displayRoundResult(cars) {
    const roundMessage = `${this.getRoundResult(cars)} \n`;
    
    this.createAndAppendDOM(roundMessage);
  }

  getRoundResult(cars) {
    let gameProcess = '';

    cars.forEach(car => {
      gameProcess += `${car.name}: ${'-'.repeat(car.location)}\n`;
    });

    return gameProcess;
  }

  displayWinner(cars) {
    const winnerList = this.getWinnerList(cars);
    const winnerMessage = `최종 우승자: ${winnerList}`;
    
    this.createAndAppendDOM(winnerMessage);
  }

  createAndAppendDOM(displayMessage) {
    const div = document.createElement('div');

    div.innerText = displayMessage;
    this._displayArea.appendChild(div);
  }

  getWinnerList(cars) {
    let max = 0;
    let winnerList = [];

    for (const car of cars) {
      if (car.location > max) {
        max = car.location;
        winnerList = [car.name];
      } 

      else if (car.location === max) {
        winnerList.push(car.name);
      }
    }

    return winnerList.join(', ');
  }

}