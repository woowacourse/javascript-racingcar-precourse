import { racingCountValidate } from '../util/validate.js';
import { racingAndResultRender } from '../view/render.js';
import { count } from '../model/cars.js';

export default () => {
  const $app = document.querySelector('#app');
  const $racingCountInput = $app.querySelector('#racing-count-input');
  const $racingCountSubmit = $app.querySelector('#racing-count-submit');

  $racingCountSubmit.addEventListener('click', e => {
    e.preventDefault();

    const racingCount = $racingCountInput.value;

    if (!racingCountValidate(racingCount)) return;
    count(racingCount);
    racingAndResultRender(racingCount);
  });
};
