import { DOM, FORWARD_NUMBER_SIGN, MINUS_SIGN, PLAIN_STRING, SEPERATOR } from './lib/constants.js';
import {
  generateFormHandler,
  getRandomNumber,
  hasSomeStringIncludeSpace,
  hasSomeStringLengthGreaterThanFive,
  hasStringDuplicated,
} from './lib/utils.js';
class Car {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.countTemplate = PLAIN_STRING;
    this.count = 0;
  }

  setCountTemplatePlusOne() {
    this.countTemplate = `${this.countTemplate}${MINUS_SIGN}`;
  }

  setCountPlusOne() {
    this.count = this.count + 1;
  }
}
class CarGameUtil {
  static makeCars(namesArray) {
    if (CarGameUtil.isValidate(namesArray)) {
      return namesArray.map((name, index) => new Car(name, index));
    }

    return null;
  }

  static isValidate(namesArray) {
    if (hasSomeStringIncludeSpace(namesArray)) {
      throw new Error('자동차 이름에 공백은 포함될 수 없습니다.');
    }
    if (hasSomeStringLengthGreaterThanFive(namesArray)) {
      throw new Error('자동차 이름은 5자 이하입니다.');
    }
    if (hasStringDuplicated(namesArray)) {
      throw new Error('자동차 이름은 중복될 수 없습니다.');
    }

    return true;
  }

  static isForward() {
    return getRandomNumber() >= FORWARD_NUMBER_SIGN;
  }

  static getWinnerCount(cars) {
    return Math.max(...cars.map((car) => car.count));
  }
}
class CarGameLogic {
  getWinner() {
    const winnerCount = CarGameUtil.getWinnerCount(this.cars);

    return this.cars.filter((car) => car.count === winnerCount);
  }

  simulatePerNumberOfTimes() {
    this.cars.forEach((car) => {
      if (CarGameUtil.isForward()) {
        car.setCountTemplatePlusOne();
        car.setCountPlusOne();
      }
    });
  }

  makeTemplatePerSimulate() {
    let template = PLAIN_STRING;
    this.cars.forEach((car) => {
      template = `${template}${car.name}: ${car.countTemplate}<br>`;
    });

    return template;
  }

  makeResultTemplate(number) {
    let template = PLAIN_STRING;
    for (let i = 0; i < number; i = i + 1) {
      this.simulatePerNumberOfTimes();
      // simulate 이후 자동차를 기준으로 템플릿을 만들어 변수에 합친다.
      template = `${template}${this.makeTemplatePerSimulate()}<br>`;
    }
    const winnerArray = this.getWinner();
    template = `${template}
    최종 우승자: <span id="${DOM.RACING_WINNERS}">${winnerArray
      .map((car) => car.name)
      .join(SEPERATOR)}</span>`;

    return template;
  }
}
class CarGame extends CarGameLogic {
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
      this.result.innerHTML = this.makeResultTemplate(Number(stringCount));
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
    el.style.display = 'block';
  }
}

new CarGame().init();
