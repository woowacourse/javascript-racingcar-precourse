export default class PlayUtils {
  constructor() {
    this.resultArea = document.getElementById('resultArea');
  }
  
  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  displayGameProcess(cars) {
    const result = document.createElement('div');
    const resultMessage = this.getGameProcess(cars);

    result.innerText = `${resultMessage}\n`;
    this.resultArea.appendChild(result);
  }

  getGameProcess(cars) {
    let gameProcess = '';

    cars.forEach((car) => {
      gameProcess += `${car.name}: ${'-'.repeat(car.location)}\n`;
    })

    return gameProcess;
  }

  displayWinner(cars) {
    const winner = document.createElement('div');
    const winnerList = this.getWinnerList(cars);
    
    winner.innerText = `최종 우승자: ${winnerList}`;
    this.resultArea.appendChild(winner);
  }

  getWinnerList(cars) {
    let max = 0;
    let winnerList = [];

    for (const car of cars) {
      if (car.location > max) {
        max = car.location;
        winnerList = [car.name];
      } 
      else if (car.location === max)
        winnerList.push(car.name);
    }

    return winnerList.join(', ');
  }
}