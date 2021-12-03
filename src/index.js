import { $, $$, hideRacingCountInput, showRacingCountInput } from './utils/dom.js';
import {
  isCarNamesInputNonValid,
  isRacingCountInputNonValid,
  carNamesInputExceptionMessage,
  racingCountInputExceptionMessage,
} from './controller/inputValidator.js';
import { Controller } from './controller/controller.js';

class View {
  constructor(controller) {
    this.controller = controller;
  }

  init() {
    hideRacingCountInput();
    this.setFormEvent();
    this.setCarNamesSubmitEvent();
    this.setRacingCountSubmitEvent();
  }

  getCarNamesInput() {
    return $('#car-names-input').value.split(',');
  }

  getRacingCountInput() {
    return Number($('#racing-count-input').value);
  }

  setFormEvent() {
    $$('form').forEach((form) =>
      form.addEventListener('submit', function (e) {
        e.preventDefault();
      })
    );
  }

  setCarNamesSubmitEvent() {
    $('#car-names-submit').addEventListener('click', () => {
      if (isCarNamesInputNonValid()) {
        carNamesInputExceptionMessage();
        return;
      }

      showRacingCountInput();
    });
  }

  setRacingCountSubmitEvent() {
    $('#racing-count-submit').addEventListener('click', () => {
      if (isCarNamesInputNonValid()) {
        carNamesInputExceptionMessage();
        return;
      }

      if (isRacingCountInputNonValid()) {
        racingCountInputExceptionMessage();
        return;
      }

      this.controller.renderGameResult(this.getCarNamesInput(), this.getRacingCountInput());
    });
  }
}

const controller = new Controller();
const view = new View(controller);
view.init();
