export const $ = (selector) => document.querySelector(selector);

export const hideRacingCountForm = () => {
  $('#racing-count-form-title').style.display = 'none';
  $('#racing-count-form').style.display = 'none';
};

export const revealRacingCountForm = () => {
  $('#racing-count-form-title').style.display = 'block';
  $('#racing-count-form').style.display = 'block';
  $('#racing-count-input').focus();
};

export const createRacingResultArea = () => {
  const AREA_ID = 'racing-result';

  const $racingResultArea = document.createElement('p');
  $racingResultArea.id = AREA_ID;

  $('#app').appendChild($racingResultArea);
};

export const paintWinners = (winners) => {
  const WINNERS_NAMES = winners.map(({ name }) => name);

  const $resultLine = document.createElement('span');
  $resultLine.innerHTML = '최종 우승자: ';

  const $racingWinners = document.createElement('span');
  $racingWinners.id = 'racing-winners';
  $racingWinners.innerHTML = WINNERS_NAMES.join();

  $resultLine.appendChild($racingWinners);
  $('#racing-result').appendChild($resultLine);
};
