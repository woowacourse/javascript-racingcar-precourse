import Car from './car.js';
import { isEmptyName, isFiveOver, isDuplication } from './validator.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.moveCount = document.getElementById('racing-count-input');
    this.inputNames = document.getElementById('car-names-input');
    document.getElementById('car-names-submit').setAttribute('type', 'button');
    document.getElementById('car-names-submit').addEventListener('click', this.clickNameBtn);
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

    return true;
  }
}

new RacingGame();
