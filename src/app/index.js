import CarGameUtil from './util.js';
import { DOM, PLAIN_STRING, SEPERATOR } from '../lib/constants.js';
import { generateFormHandler } from '../lib/utils.js';
import CarGameController from './controller.js';

class CarGame extends CarGameController {
  constructor() {
    super();
    this.cars = null;
  }

  init() {
    this.initDOM();
    this.initView();
    this.initHandler();
    this.formCars.addEventListener('submit', this.onCarsFormSubmit);
    this.formCount.addEventListener('submit', this.onCountFormSubmit);
  }

  initView() {
    this.hideElement(this.countTitle);
    this.hideElement(this.formCount);
    this.hideElement(this.resultTitle);
    this.hideElement(this.result);
  }

  initDOM() {
    this.app = document.getElementById(DOM.APP);
    this.formCars = document.getElementById(DOM.CAR_NAMES);
    this.countTitle = document.getElementById(DOM.COUNT_TITLE);
    this.formCount = document.getElementById(DOM.RANCING_COUNT);
    this.resultTitle = document.getElementById(DOM.RESULT_TITLE);
    this.result = document.createElement('div');
    this.result.setAttribute('id', DOM.RESULT);
    this.app.appendChild(this.result);
  }

  initHandler() {
    this.onCarsFormSubmit = (e) =>
      generateFormHandler({
        e,
        executor: this.afterCarsSubmitLogic.bind(this),
      });
    this.onCountFormSubmit = (e) =>
      generateFormHandler({
        e,
        executor: this.afterCountSubmitLogic.bind(this),
      });
  }

  afterCarsSubmitLogic(carsString) {
    try {
      this.cars = CarGameUtil.makeCars(carsString.split(SEPERATOR));
      this.showElement(this.countTitle);
      this.showElement(this.formCount);
    } catch (error) {
      this.cars = null;
      alert(error);
    }
  }

  afterCountSubmitLogic(stringCount) {
    try {
      this.result.innerHTML = this.generateTemplateOfGameResult(Number(stringCount));
      this.showElement(this.resultTitle);
      this.showElement(this.result);
    } catch (error) {
      this.result.innerHTML = PLAIN_STRING;
      alert(error);
    }
  }

  hideElement(el) {
    el.style.display = 'none';
  }

  showElement(el) {
    el.style.display = PLAIN_STRING;
  }
}
export default CarGame;
