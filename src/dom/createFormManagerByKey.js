import FormManager from './formManager.js';
import isValidFormKey from './isValidFormKey.js';
import { DICT_ID_FORM_ELEMENTS, DICT_ACTION_BUTTON_SUBMIT } from './const.js';

function createFormManagerByKey(formKey) {
  if (!isValidFormKey(formKey)) return undefined;

  const idDictionary = DICT_ID_FORM_ELEMENTS[formKey];
  const buttonAction = DICT_ACTION_BUTTON_SUBMIT[formKey];
  const formManager = new FormManager(idDictionary);
  formManager.setButtonAction(buttonAction);

  return formManager;
}

export default createFormManagerByKey;
