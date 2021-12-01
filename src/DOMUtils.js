import { $ } from './utils.js';

const DOMUtils = {
  hideSection: () => {
    hideRacingCountSection();
    hideRacingResultSection();
  },
};

const hideRacingCountSection = () => {
  $('#racing-count-title').style.display = 'none';
  $('#racing-count-form').style.display = 'none';
};

const hideRacingResultSection = () => {
  $('#racing-result-title').style.display = 'none';
};

export default DOMUtils;
