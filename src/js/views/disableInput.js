import $ from '../utils/dom.js';

export const disableCarInput = () => {
  $('#car-names-input').disabled = 'true';
  $('#car-names-submit').disabled = 'true';
};

export const disableCountInput = () => {
  $('#racing-count-input').disabled = 'true';
  $('#racing-count-submit').disabled = 'true';
};
