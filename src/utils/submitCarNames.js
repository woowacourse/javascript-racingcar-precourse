import { $ } from './selector.js';
import { isValidCarNames } from './isValidCarNames.js';
import Car from '../classes/Car.js';

export const submitCarNames = () => {
  const carNamesList = converterStringToArray($('#car-names-input').value);
  let cars = [];

  if (!isValidCarNames(carNamesList)) {
    $('#car-names-input').value = '';
    return [];
  }

  carNamesList.forEach((carName) => {
    const car = new Car(carName);
    cars.push(car);
  });

  return cars;
};

const converterStringToArray = (carNamesString) => {
  let carNamesList = [];
  carNamesString
    .split(',')
    .forEach((carName) => carNamesList.push(carName.trim()));
  return carNamesList;
};
