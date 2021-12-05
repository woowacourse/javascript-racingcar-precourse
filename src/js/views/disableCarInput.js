import $ from '../utils/dom.js';

const disableCarInput = () => {
  $('#car-names-input').disabled = 'true';
  $('#car-names-submit').disabled = 'true';
};

export default disableCarInput;
