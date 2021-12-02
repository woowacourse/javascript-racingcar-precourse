import { showElement } from '../utils/setAttribute.js';

export default function getRacingCount(carObjectList) {
  const $racingCountTitle = document.querySelector('#racing-count-title');
  const $racingCountForm = document.querySelector('#racing-count-form');
  const $racingCountSubmit = document.querySelector('#racing-count-submit');

  showElement($racingCountTitle);
  showElement($racingCountForm);

  // $racingCountSubmit.addEventListener('click', () =>
  //   handleRacingCountSubmit(event, carObjectList),
  // );
}
