import generateFormTagById from './utils/generateFormTagById.js';
import {
  ID_RACING_COUNT,
  TYPE_RACING_COUNT,
  BUTTON_SUBMIT_TEXT,
} from './const.js';

function generateRacingCountForm() {
  return generateFormTagById(
    ID_RACING_COUNT,
    TYPE_RACING_COUNT,
    BUTTON_SUBMIT_TEXT
  );
}

export default generateRacingCountForm;
