import { NUM_OF_CARS } from './const.js';

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

export function extractNames(nameInput) {
  let name = '';
  let nameList = [];
  for (let i = 0; i < nameInput.length; i++) {
    if (nameInput[i] !== ',') {
      name += nameInput[i];
    } else {
      nameList.push(name);
      name = '';
    }
  }
  nameList.push(name);
  return nameList;
}
