import { addIdToElements, showElements } from '../utils/documentHandler.js';
import {
  validateCarNamesInput,
  validateRacingCountInput,
} from '../utils/validator.js';
import { ERROR } from '../utils/constants.js';
import Car from '../classes/car.js';

export default class RacingCarGame {
  constructor() {
    this.prepareDOM();
    this.carNamesInput = document.querySelector('#car-names-input');
    this.carNamesSubmit = document.querySelector('#car-names-submit');
    this.racingCountInput = document.querySelector('#racing-count-input');
    this.racingCountSubmit = document.querySelector('#racing-count-submit');
    this.countInputPart = document.querySelector('#count-input-part');
    this.resultPart = document.querySelector('#result-part');
    this.carNamesSubmit.addEventListener('click', this.getCarNames.bind(this));
    this.racingCountSubmit.addEventListener(
      'click',
      this.getNumTries.bind(this)
    );
    this.cars = [];
    this.winners = [];
    this.maxProgress = 0;
    this.nTries = 0;
  }

  async prepareDOM() {
    await addIdToElements();
  }

  clearElementsValue(elements) {
    elements.forEach((element) => {
      element.value = '';
    });
  }

  getCarNames() {
    const carNames = this.carNamesInput.value.split(',');
    const WHICH_ERROR = validateCarNamesInput(carNames);
    if (WHICH_ERROR === ERROR.NONE) {
      this.createCar(carNames);
      showElements([this.countInputPart]);
    } else {
      alert(WHICH_ERROR);
      this.clearElementsValue([this.carNamesInput]);
      this.carNamesInput.focus();
    }
  }

  createCar(racingCars) {
    racingCars.forEach((car) => {
      this.cars.push(new Car(car));
    });
  }

  getNumTries() {
    const WHICH_ERROR = validateRacingCountInput(this.racingCountInput.value);
    if (WHICH_ERROR === ERROR.NONE) {
      this.nTries = this.racingCountInput.value;
      showElements([this.resultPart]);
      this.race();
      // console.log(this.cars);
    } else {
      alert(WHICH_ERROR);
      this.clearElementsValue([this.racingCountInput]);
      this.racingCountInput.focus();
    }
  }

  race() {
    for (let i = 0; i < this.nTries; i++) {
      this.cars.forEach((car) => {
        car.move();
      });
    }
  }
}
