import { checkCarName, checkCount } from './checkInput.js';
import { showCountInput, showResult } from './elementControl.js';
import Car from './car.js';

export default function RacingCarGame() {
  const carNameInput = document.querySelector('#car-names-input');
  const carNameSubmit = document.querySelector('#car-names-submit');
  const racingCountInput = document.querySelector('#racing-count-input');
  const racingCountSubmit = document.querySelector('#racing-count-submit');
  let carNames = [];
  let countValue = 0;
  let carObjectList = [];

  carNameSubmit.addEventListener('click', () => this.afterInputCarName());
  carNameInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      this.afterInputCarName();
    }
  });
  racingCountSubmit.addEventListener('click', () => this.afterInputCount());
  racingCountInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      this.afterInputCount();
    }
  });

  this.afterInputCarName = () => {
    const carNameChecked = checkCarName(carNameInput.value);
    if (carNameChecked) {
      showCountInput();
      carNames = carNames.concat(carNameChecked);
      racingCountInput.focus();
    } else {
      carNameInput.value = '';
      carNameInput.focus();
    }
  };

  this.afterInputCount = () => {
    const countChecked = checkCount(racingCountInput.value);
    if (countChecked) {
      showResult();
      countValue = countChecked;
      this.setCars(carNames, countValue);
    } else {
      carNameInput.value = '';
      carNameInput.focus();
    }
  };

  this.setCars = names => {
    names.forEach(el => {
      carObjectList.push(new Car(el));
    });
  };
}

new RacingCarGame();
