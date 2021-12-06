import {
  NAME_RANGE as NAME_MAX_RANGE,
  NUM_OF_CARS_MAX,
  NUM_OF_CARS_MIN,
} from './const.js';

export function countNumOfCar(name) {
  let names = name.split(',');
  let count = names.length;
  return count;
}

export function isTooManyCars(nameInput) {
  if (countNumOfCar(nameInput) <= NUM_OF_CARS_MAX) {
    return true;
  }
  alert(`Input Names under ${NUM_OF_CARS_MAX}`);
}

export function isFewCars(nameInput) {
  if (NUM_OF_CARS_MIN <= countNumOfCar(nameInput)) {
    return true;
  }
  alert(`Input at least ${NUM_OF_CARS_MIN} Names`);
}

export function isCarEnough(nameInput) {
  if (!isTooManyCars(nameInput)) {
    return false;
  }
  if (!isFewCars(nameInput)) {
    return false;
  }
  return true;
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

export function isNameTooLong(names) {
  for (let i of names) {
    if (i.length > NAME_MAX_RANGE) {
      alert('Input shorter Name');
    }
  }
}
