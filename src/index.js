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
      alert('입력 형식이 틀렸습니다. 다시 확인해주세요');
      return;
    }

    console.log('클릭 이름확인');
  };

  isCorrectName(userInput) {
    let inputNames = userInput.split(',');

    if (isEmptyName(inputNames) || isFiveOver(inputNames) || isDuplication(inputNames)) {
      return false;
    }

    return true;
  }
}

new RacingGame();
