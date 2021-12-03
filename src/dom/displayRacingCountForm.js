import generateHeading4 from './utils/generateHeading4.js';
import generateRacingCountForm from './generateRacingCountForm.js';
import { HEADING_RACING_COUNT } from './const.js';

function displayRacingCountForm(parent) {
  const heading = generateHeading4(HEADING_RACING_COUNT);
  const form = generateRacingCountForm();

  parent.appendChild(heading);
  parent.appendChild(form);
}

export default displayRacingCountForm;
