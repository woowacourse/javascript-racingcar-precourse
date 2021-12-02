import { $ } from './common.js';

export const addCarNamesSubmitClickEvent = input => {
  const $carNamesSubmit = $('car-names-submit');
  const $carNamesInput = $('car-names-input');

  $carNamesSubmit.addEventListener('click', event => {
    event.preventDefault();
    if (input.isCarNamesValid($carNamesInput.value)) {
      $carNamesSubmit.disabled = true;
    } else {
      $carNamesInput.value = '';
    }
  });
};
