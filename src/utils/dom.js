export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);
const hide = (selector) => (selector.style.display = 'none');
const show = (selector) => (selector.style.display = 'block');

export const hideRacingCountInput = () => {
  hide($$('h4')[0]);
  hide($$('h4')[1]);
  hide($$('form')[1]);
};

export const showRacingCountInput = () => {
  show($$('h4')[0]);
  show($$('form')[1]);
};

export const showGameResultHeader = () => {
  show($$('h4')[1]);
};
