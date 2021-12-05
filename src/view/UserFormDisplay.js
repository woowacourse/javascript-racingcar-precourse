import { DONE } from '../data/constants.js';
import {
  $nameInput,
  $nameSubmit,
  $countInput,
  $countSubmit,
  $$countGroups,
  $$resultGroups,
} from '../data/elements.js';
import { disableElement, visibleElement } from '../utils/element-tools.js';

export default class UserFormDisplay {
  static init() {
    visibleElement([...$$countGroups, ...$$resultGroups], false);
    disableElement([$nameInput, $nameSubmit, $countInput, $countSubmit], false);

    $nameInput.value = '';
    $countInput.value = '';
  }

  static errorMessage(resultCode, eventElement) {
    const exceptions = Object.values(DONE);
    if (exceptions.includes(resultCode) === true) return false;

    alert(resultCode.description);
    eventElement.previousElementSibling.focus();
    return true;
  }

  static open(resultCode) {
    switch (resultCode) {
      case DONE.USERINPUT_NAME:
        visibleElement([...$$countGroups], true);
        disableElement([$nameInput, $nameSubmit], true);
        break;

      case DONE.USERINPUT_COUNT:
        visibleElement([...$$resultGroups], true);
        disableElement([$countInput, $countSubmit], true);
        break;

      // no default
    }
  }

  static bindNamesSubmit(handler) {
    $nameSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      handler(event, $nameInput.value);
    });
  }

  static bindCountSubmit(handler) {
    $countSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      handler(event, $countInput.value);
    });
  }
}
