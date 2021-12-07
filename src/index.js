import Car from './car.js';
import { isEmptyName, isBiggerThanFive, isDuplicatedName, isValidCount } from './validator.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.isValidNames = 0;
    this.moveCount = 0;
    this.inputCount = document.getElementById('racing-count-input');
    this.inputNames = document.getElementById('car-names-input');
    document.getElementById('car-names-submit').setAttribute('type', 'button');
    document.getElementById('racing-count-submit').setAttribute('type', 'button');
    document.getElementById('car-names-submit').addEventListener('click', this.clickNameBtn);
    document.getElementById('racing-count-submit').addEventListener('click', this.clickCountBtn);
  }

  clickNameBtn = () => {
    if (!this.isCorrectName(this.inputNames.value)) {
      alert('이름 입력 형식이 틀렸어요. 다시 확인해주세요🙄');
      return;
    }

    document.getElementById('car-names-submit').setAttribute('disabled', 'true');
  };

  isCorrectName(userInput) {
    let inputNames = userInput.split(',');

    if (isEmptyName(inputNames) || isBiggerThanFive(inputNames) || isDuplicatedName(inputNames)) {
      return false;
    }

    this.makeCars(inputNames);
    this.isValidNames = 1;
    return true;
  }

  clickCountBtn = () => {
    if (!this.isCorrectCount(this.inputCount.value)) {
      alert('횟수를 올바르게 입력해주세요');
      return;
    } else if (this.isValidNames === 0) {
      alert('자동차 이름 입력 후 다시 입력해주세요');
      return;
    }

    this.playGame();
  };

  isCorrectCount(userInput) {
    let inputCount = Number(userInput);

    if (!isValidCount(inputCount)) {
      return false;
    }

    this.moveCount = inputCount;
    return true;
  }

  getResultElement() {
    let gameResult = document.createElement('span');
    gameResult.setAttribute('id', 'game-result');
    document.getElementById('app').appendChild(gameResult);

    return gameResult;
  }

  playGame() {
    while (this.moveCount > 0) {
      this.movedCar();
      this.getResultElement.innerText += '\n';
      this.moveCount--;
    }

    this.getResultElement().innerText += '최종우승자: ';
    this.printWinner();
  }

  printWinner() {
    let gameWinner = document.createElement('span');
    gameWinner.setAttribute('id', 'racing-winners');
    document.getElementById('app').appendChild(gameWinner);

    this.cars.sort((a, b) => b.distance.length - a.distance.length);

    gameWinner.innerText += `${this.getWinner(this.cars).toString()}`;
  }

  getWinner(cars) {
    let Winner = [];

    for (let car of cars) {
      if (cars[0].distance === car.distance) {
        Winner.push(car.name);
      } else if (cars[0].distance !== car.distance) {
        return Winner;
      }
    }

    return Winner;
  }

  movedCar() {
    for (let car of this.cars) {
      if (this.canMove()) {
        car.distance += '-';
      }

      this.getResultElement().innerText += `${car.name}: ${car.distance}\n`;
    }
  }

  canMove() {
    let randomNum = window.MissionUtils.Random.pickNumberInRange(0, 9);

    if (randomNum >= 4) {
      return true;
    }

    return false;
  }

  makeCars(inputNames) {
    for (let name of inputNames) {
      this.cars.push(new Car(name));
    }

    for (let car of this.cars) {
      car.distance = '';
    }
  }
}

new RacingGame();
