import { $ } from './util/dom.js';

export const getCarNameInput = e => {
  e.preventDefault();
  const carNamesInput = $('#car-names-input').value.split(',');
};
