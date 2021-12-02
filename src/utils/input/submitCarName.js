import $ from '../common/selector.js';

export const submitCarName = e => {
  e.preventDefault();
  const carNames = $('car-names-input').value.split(',');

  console.log('carNames: ', carNames);
  return carNames;
};
