import { getValidateNames } from './validateInput.js';

const $carNamesInput = document.querySelector('#car-names-input');
const $carNamesSubmit = document.querySelector('#car-names-submit');

function Car(name) {
  this.name = name;
}

function carNamesInput(event) {
  event.preventDefault();

  const carNames = $carNamesInput.value.split(',');

  if (getValidateNames(carNames)) {
    const cars = carNames.map(name => new Car(name));
  }
}

export default function userInput() {
  $carNamesSubmit.addEventListener('click', carNamesInput);
}
