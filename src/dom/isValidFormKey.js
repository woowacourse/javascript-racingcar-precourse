import { KEY_FORM_CAR_NAMES, KEY_FORM_RACING_COUNT } from './const.js';

function isValidFormKey(formKey) {
  return formKey === KEY_FORM_CAR_NAMES || formKey === KEY_FORM_RACING_COUNT;
}

export default isValidFormKey;
