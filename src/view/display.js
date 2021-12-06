const racingCountText = document.querySelector('#try-count');
const racingCountInput = document.querySelector('#racing-count-form input');
const racingCountBtn = document.querySelector('#racing-count-form button');
const result = document.querySelector('#result');

export const hideRacingCountContainer = function () {
  racingCountText.hidden = true;
  racingCountInput.hidden = true;
  racingCountBtn.hidden = true;
};

export const hideResultContainer = function () {
  result.hidden = true;
};

export const showRacingCountContainer = function () {
  racingCountText.hidden = false;
  racingCountInput.hidden = false;
  racingCountBtn.hidden = false;
};

export const showResultTextElement = function () {
  result.hidden = false;
};

export const appendResultSpanElement = function () {
  const resultSpan = document.createElement('span');

  resultSpan.id = 'result-span';
  result.appendChild(resultSpan);
};

export const appendRacingWinnerSpanElement = function () {
  const racingWinners = document.createElement('span');

  racingWinners.id = 'racing-winners';
  result.appendChild(racingWinners);
};
