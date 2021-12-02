import $ from '../common/selector.js';
import { carNameValidation } from '../validation/carNameValidation.js';

export const submitCarName = e => {
  e.preventDefault();
  const carNames = $('#car-names-input').value.trim().split(',');
  const { isError, inValidText } = carNameValidation(carNames);

  if (isError) {
    alert(inValidText);
    $('#car-names-input').value = '';
    return;
  }

  return carNames;
};
