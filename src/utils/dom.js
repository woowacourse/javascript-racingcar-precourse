const $ = (selector) => document.querySelector(selector);

const initScreen = () => {
  $('#racing-count-heading').style.visibility = 'hidden';
  $('#racing-count-form').style.visibility = 'hidden';
  $('#racing-result-heading').style.visibility = 'hidden';
};

const showRacingCountScreen = () => {
  $('#racing-count-heading').style.visibility = 'visible';
  $('#racing-count-form').style.visibility = 'visible';
};

const showRacingResultScreen = () => {
  $('#racing-result-heading').style.visibility = 'visible';
};

export { $, initScreen, showRacingCountScreen, showRacingResultScreen };
