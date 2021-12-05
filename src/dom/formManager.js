import isValidFormKey from './isValidFormKey.js';
import { DICT_ID_FORM_ELEMENTS, DICT_ACTION_BUTTON_SUBMIT } from './const.js';

class FormManager {
  constructor({ formId, inputId, buttonId }) {
    this.form = document.getElementById(formId);
    this.input = document.getElementById(inputId);
    this.button = document.getElementById(buttonId);
  }

  static createFormManagerByKey(formKey) {
    if (!isValidFormKey(formKey)) return undefined;

    const idDictionary = DICT_ID_FORM_ELEMENTS[formKey];
    const buttonAction = DICT_ACTION_BUTTON_SUBMIT[formKey];
    const formManager = new FormManager(idDictionary);
    formManager.setButtonAction(buttonAction);

    return formManager;
  }

  setVisibility(visible) {
    this.form.style.visibility = visible ? 'visible' : 'hidden';
  }

  getInputValue() {
    return this.input.value;
  }

  initInputValue() {
    this.input.value = '';
    this.input.focus();
  }

  setButtonAction(action) {
    this.button.dataset.action = action;
  }
}

export default FormManager;
