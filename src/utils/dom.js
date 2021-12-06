const $id = (selector) => document.getElementById(selector);

const initScreen = () => {
  $id('racing-count-heading').style.visibility = 'hidden';
  $id('racing-count-form').style.visibility = 'hidden';
  $id('racing-result-heading').style.visibility = 'hidden';
};

const showRacingCountScreen = () => {
  $id('racing-count-heading').style.visibility = 'visible';
  $id('racing-count-form').style.visibility = 'visible';
};

const showRacingResultScreen = () => {
  $id('racing-result-heading').style.visibility = 'visible';
};

const insertText = (selector, text) => {
  $id(selector).insertAdjacentHTML('beforeend', text);
};

export { $id, initScreen, showRacingCountScreen, showRacingResultScreen, insertText };
