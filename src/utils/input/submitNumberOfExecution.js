import $ from '../common/selector.js';

export const submitCountOfRacing = e => {
  e.preventDefault();
  const play = $('#racing-count-input').value;
  return Number(play);
};
