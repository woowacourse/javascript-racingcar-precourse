import Car from './car.js';
import { isEmptyName, isFiveOver, isDuplication } from './validator.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.isValidNames = 0;
    this.moveCount = document.getElementById('racing-count-input');
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

  playGame() {}

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
