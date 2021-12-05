import $ from '../utils/dom.js';

const disableCountInput = () => {
  $('#racing-count-input').disabled = 'true';
  $('#racing-count-submit').disabled = 'true';
};

export default disableCountInput;
