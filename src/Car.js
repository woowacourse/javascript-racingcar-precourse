import { carNamesInput, racingCountInput } from './elements.js';

import checkCarNamesInputValid from './InputValidation.js';

function onInvalidCarNamesInput() {
  alert('잘못 입력하셨습니다. 자동차 이름을 5자 이하로 입력해 주세요.');
  carNamesInput.focus();
}

function Car(name) {
  this.name = name;
  this.forwardCount = 0;
}

function createCars(carNames) {
  const cars = [];

  for (let i = 0; i < carNames.length; i += 1) {
    cars[i] = new Car(carNames[i]);
  }

  return cars;
}

function onValidCarNamesInput(carNames) {
  window.cars = createCars(carNames);
  racingCountInput.focus();
}

export default function onCarNamesSubmit(event) {
  event.preventDefault();
  const carNames = carNamesInput.value.split(',');
  const carNamesInputValid = checkCarNamesInputValid(carNames);

  if (!carNamesInputValid) {
    onInvalidCarNamesInput();
  } else {
    onValidCarNamesInput(carNames);
  }
}
