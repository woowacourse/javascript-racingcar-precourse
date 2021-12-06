import carNamesValidate from '../util/validate.js';

export default () => {
  const $app = document.querySelector('#app');
  const $carNamesInput = $app.querySelector('#car-names-input');
  const $carNamesSubmit = $app.querySelector('#car-names-submit');

  $carNamesSubmit.addEventListener('click', e => {
    e.preventDefault();

    const carNames = $carNamesInput.value.split(',');

    if (!carNamesValidate(carNames)) return;
    console.log('성공');
  });
};
