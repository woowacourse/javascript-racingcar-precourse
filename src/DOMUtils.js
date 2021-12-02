import { $ } from './utils.js';

const hideRacingCountSection = () => {
  $('#racing-count-title').style.display = 'none';
  $('#racing-count-form').style.display = 'none';
};

const hideRacingResultSection = () => {
  $('#racing-result-title').style.display = 'none';
};

const DOMUtils = {
  initSection: () => {
    hideRacingCountSection();
    hideRacingResultSection();
  },

  disableCarNamesForm: () => {
    $('#car-names-input').disabled = true;
    $('#car-names-submit').disabled = true;
  },

  showRacingCountSection: () => {
    $('#racing-count-title').style.display = '';
    $('#racing-count-form').style.display = '';
  },
};

export default DOMUtils;
