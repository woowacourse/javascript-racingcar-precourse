import $ from '../common/selector.js';
import Car from '../../index.js';
import { carNameValidation } from '../validation/carNameValidation.js';

export const submitCarName = (e, cars) => {
  e.preventDefault();

  const carNames = $('#car-names-input').value.trim().split(',');
  const { isError, inValidText } = carNameValidation(carNames);

  if (isError) {
    alert(inValidText);
    $('#car-names-input').value = '';
    return;
  }

  carNames.forEach(carName => {
    const car = new Car(carName);
    cars.push(car);
  });

  return cars;
};
