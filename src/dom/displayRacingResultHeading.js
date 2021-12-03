import generateHeading4 from './utils/generateHeading4.js';
import { HEADING_RESULT } from './const.js';

function displayRacingResultHeading(parent) {
  parent.appendChild(generateHeading4(HEADING_RESULT));
}

export default displayRacingResultHeading;
