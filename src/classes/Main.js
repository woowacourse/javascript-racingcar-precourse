import Car from './Car.js';
import CarRacing from './CarRacing.js';
import { SELECTOR, STYLE_DISPLAY, ERROR_MESSAGE } from '../constants.js';
import {
  on,
  qs,
  setStyleDisplay,
  checkOverFiveLetters,
  setValidation,
} from '../utils.js';

const { BLOCK, INLINE_BLOCK, NONE } = STYLE_DISPLAY;
const { MORE_THAN_FIVE_LETTERS, NO_MORE_THAN_ZERO, EMPTY_VALUE } =
  ERROR_MESSAGE;
const {
  APP,
  CAR_NAMES_INPUT,
  CAR_NAMES_SUBMIT_BUTTON,
  RACING_COUNT_INPUT,
  RACING_COUNT_SUBMIT_BUTTON,
  RACING_COUNT,
  RACING_RESULT,
} = SELECTOR;

export default class Main {
  constructor() {
    this.initializeHTML();
    this.handleCarNamesSubmitButton();
    this.handleRacingCountSubmitButton();
    this.cars = [];
  }

  initializeHTML() {
    this.app = qs(APP);
    this.carNamesInput = qs(CAR_NAMES_INPUT);
    this.carNamesSubmitButton = qs(CAR_NAMES_SUBMIT_BUTTON);
    this.racingCountInput = qs(RACING_COUNT_INPUT);
    this.racingCountSubmitButton = qs(RACING_COUNT_SUBMIT_BUTTON);
    this.racingCount = qs(RACING_COUNT);
    this.racingResult = qs(RACING_RESULT);

    setStyleDisplay(this.racingCount, NONE);
    setStyleDisplay(this.racingCountInput, NONE);
    setStyleDisplay(this.racingCountSubmitButton, NONE);
    setStyleDisplay(this.racingResult, NONE);
  }

  showRacingCountForm() {
    setStyleDisplay(this.racingCount, BLOCK);
    setStyleDisplay(this.racingCountInput, INLINE_BLOCK);
    setStyleDisplay(this.racingCountSubmitButton, INLINE_BLOCK);
  }

  handleCarNamesSubmitButton() {
    on(this.carNamesSubmitButton, 'click', (event) => {
      event.preventDefault();
      const carNamesArr = this.carNamesInput.value.split(',');

      if (setValidation(!this.carNamesInput.value, EMPTY_VALUE)) return;
      if (setValidation(!checkOverFiveLetters(carNamesArr), MORE_THAN_FIVE_LETTERS))
        return;

      carNamesArr.forEach((name) => this.cars.push(new Car(name)));
      this.showRacingCountForm();
    });
  }

  showRacingResult(resultTemplate) {
    setStyleDisplay(this.racingResult, BLOCK);
    const racingEachResults = document.createElement('div');
    racingEachResults.innerHTML = resultTemplate;
    this.app.append(racingEachResults);
  }

  handleRacingCountSubmitButton() {
    on(this.racingCountSubmitButton, 'click', (event) => {
      event.preventDefault();
      const racingCountInputValue = this.racingCountInput.value;

      if (setValidation(racingCountInputValue <= 0, NO_MORE_THAN_ZERO)) return;

      const carRacing = new CarRacing(this.cars);
      const resultTemplate = carRacing.play(racingCountInputValue);
      this.showRacingResult(resultTemplate);
    });
  }
}
