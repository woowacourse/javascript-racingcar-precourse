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

  static errorMessage(resultCode, eventElement = null) {
    const exceptions = [DONE.USERINPUT_NAME, DONE.USERINPUT_COUNT];
    if (exceptions.includes(resultCode) === true) return false;
    if (eventElement instanceof HTMLElement === true) {
      eventElement.previousElementSibling.focus();
    }

    alert(resultCode.description);
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
      handler($nameInput.value);
    });
  }

  static bindCountSubmit(handler) {
    $countSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      handler($countInput.value);
    });
  }
}
