import Car from './class/Car.js';

import {
  checkNameLength,
  checkEmptyName,
  checkDuplicateName,
} from './utils/validation.js';

import {
  ID_CAR_NAMES_INPUT,
  ID_CAR_NAMES_SUBMIT,
} from './constant/selector.js';
import { INPUT_NAME_ERROR } from './constant/error.js';

export default class App {
  constructor() {
    this.cars = [];
    this.$carNamesInput = document.getElementById(ID_CAR_NAMES_INPUT);
    this.$carNamesSubmit = document.getElementById(ID_CAR_NAMES_SUBMIT);
  }

  init() {
    this.addEvent();
  }

  addEvent() {
    this.$carNamesSubmit.addEventListener(
      'click',
      this.carNamesSubmitClickEventHandler.bind(this)
    );
  }

  carNamesSubmitClickEventHandler(e) {
    e.preventDefault();

    const carNames = this.processInputNameValue();
    const isValid = this.checkValidInputNameValue(carNames);

    if (isValid) {
      this.generateCar(carNames);
    }
  }

  processInputNameValue() {
    const carNames = this.$carNamesInput.value.split(',').map((name) => {
      return name.trim();
    });

    return carNames;
  }

  checkValidInputNameValue(carNames) {
    const checkingResults = [
      checkNameLength(carNames),
      checkEmptyName(carNames),
      checkDuplicateName(carNames),
    ];

    const isAllPass = checkingResults.every((result) => result);

    if (!isAllPass) {
      this.handleInpuNameException(checkingResults);
    }

    return isAllPass;
  }

  handleInpuNameException(checkingResults) {
    const errorCode = checkingResults.indexOf(false);
    const errorMessage = INPUT_NAME_ERROR[errorCode];

    alert(errorMessage);
    this.$carNamesInput.focus();
  }

  generateCar(carNames) {
    this.cars = carNames.map((name) => {
      return new Car(name);
    });
  }
}
