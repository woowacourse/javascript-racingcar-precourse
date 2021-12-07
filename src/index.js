import Car from './car.js';
import { isEmptyName, isFiveOver, isDuplication } from './validator.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.isValidNames = 0;
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

    this.makeCars(inputNames);
    this.isValidNames = 1;
    return true;
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
