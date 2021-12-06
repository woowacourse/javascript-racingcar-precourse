import { racingCountValidate } from '../util/validate.js';

export default () => {
  const $app = document.querySelector('#app');
  const $racingCountInput = $app.querySelector('#racing-count-input');
  const $racingCountSubmit = $app.querySelector('#racing-count-submit');

  $racingCountSubmit.addEventListener('click', e => {
    e.preventDefault();

    const racingCount = $racingCountInput.value;

    if (!racingCountValidate(racingCount)) return;
  });
};
