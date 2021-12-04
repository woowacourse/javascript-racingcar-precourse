import generateFormTagById from './utils/generateFormTagById.js';
import { ID_CAR_NAMES, TYPE_CAR_NAMES } from './const.js';

function generateCarNamesForm() {
  return generateFormTagById(ID_CAR_NAMES, TYPE_CAR_NAMES);
}

export default generateCarNamesForm;
