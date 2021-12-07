import { carNamesInput } from './elements.js';

import checkCarNamesInputValid from './InputValidation.js';

export default function onCarNamesSubmit(event) {
  event.preventDefault();
  const carNames = carNamesInput.value.split(',');
  const carNamesInputValid = checkCarNamesInputValid(carNames);
  console.log(carNamesInputValid);
}
