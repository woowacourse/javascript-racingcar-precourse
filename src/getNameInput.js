import { NUM_OF_CARS } from './const.js';

export function getNameInput() {
  const nameEntered = document.getElementById('car-names-input').value;
  isNameInputValid(nameEntered);
}

export function countCommas(name) {
  let count = 0;
  let pos = name.indexOf(',');
  while (pos !== -1) {
    count++;
    pos = name.indexOf(',', pos + 1);
  }
  return count;
}

export function isNameInputValid(nameInput) {
  if (countCommas(nameInput) < NUM_OF_CARS) {
    return true;
  }
  alert(`Input Name under ${NUM_OF_CARS}`);
}
