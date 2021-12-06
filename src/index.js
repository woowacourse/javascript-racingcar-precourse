import {
  DOM,
  FORWARD_NUMBER_SIGN,
  MINUS_SIGN,
  PLAIN_STRING,
} from './lib/constants.js';
import { getRandomNumber } from './lib/utils.js';
import { isEveryStringLessOrEqualsFive } from './lib/utils.js';
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
    throw new Error('자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.');
  }

  static isValidate(namesArray) {
    return isEveryStringLessOrEqualsFive(namesArray);
  }

  static isForward() {
    return getRandomNumber() >= FORWARD_NUMBER_SIGN;
  }

  static getWinnerCount(cars) {
    return Math.max(...cars.map(car => car.count));
  }
}
class CarGameLogic {
  constructor() {}

  getWinner() {
    const winnerCount = CarGameUtil.getWinnerCount(this.cars);

    return this.cars.filter(car => car.count === winnerCount);
  }

  simulatePerNumberOfTimes() {
    this.cars.forEach(car => {
      if (CarGameUtil.isForward()) {
        car.setCountTemplatePlusOne();
        car.setCountPlusOne();
      }
    });
  }

  makeTemplatePerSimulate() {
    let template = PLAIN_STRING;
    this.cars.forEach(car => {
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
      .map(car => car.name)
      .join(',')}</span>`;

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
    this.formCars.addEventListener('submit', this.onFormCarsSubmit);
    this.formCount.addEventListener('submit', this.onFormCountSubmit);
  }

  initView() {
    this.hideElement(this.countTitle);
    this.hideElement(this.formCount);
    this.hideElement(this.resultTitle);
    this.hideElement(this.result);
  }

  initDOM() {
    this.app = document.querySelector(DOM.APP);

    this.formCars = document.querySelector(DOM.CAR_NAMES);

    this.countTitle = document.querySelector(DOM.COUNT_TITLE);
    this.formCount = document.querySelector(DOM.RANCING_COUNT);

    this.resultTitle = document.querySelector(DOM.RESULT_TITLE);
    this.result = document.createElement('div');
    this.result.setAttribute('id', 'result');
    this.app.appendChild(this.result);
  }

  initHandler() {
    this.onFormCarsSubmit = e => {
      e.preventDefault();
      const [{ value: carsString }] = e.target;
      try {
        this.cars = CarGameUtil.makeCars(carsString.split(','));
        this.showElement(this.countTitle);
        this.showElement(this.formCount);
      } catch (error) {
        this.cars = null;
        alert(error);
      }
    };
    this.onFormCountSubmit = e => {
      e.preventDefault();
      const [{ value: stringNumber }] = e.target;
      try {
        this.result.innerHTML = this.makeResultTemplate(Number(stringNumber));
        this.showElement(this.resultTitle);
        this.showElement(this.result);
      } catch (error) {
        this.result.innerHTML = PLAIN_STRING;
        alert(error);
      }
    };
  }

  hideElement(el) {
    el.style.display = 'none';
  }

  showElement(el) {
    el.style.display = 'block';
  }
}

new CarGame().init();
