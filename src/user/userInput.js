import { getValidateNames } from './validateInput.js';

const $carNamesInput = document.querySelector('#car-names-input');
const $carNamesSubmit = document.querySelector('#car-names-submit');
const $racingCountInput = document.querySelector('#racing-count-input');
const $racingCountSubmit = document.querySelector('#racing-count-submit');

function Car(name) {
  this.name = name;
}

function carNamesInput(event) {
  event.preventDefault();

  const carNames = $carNamesInput.value.split(',');

  if (getValidateNames(carNames)) {
    const cars = carNames.map(name => new Car(name));
    racingCountInput(cars);
  }
}

function racingCountInput(cars) {
  cars.forEach(car => (car.count = 0));
  $racingCountSubmit.addEventListener('click', event => {
    event.preventDefault();

    const racingCount = $racingCountInput.value;
    console.log(racingCount);
  });
}

export default function userInput() {
  $carNamesSubmit.addEventListener('click', carNamesInput);
}
