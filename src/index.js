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
}
class CarGameLogic {
  constructor() {}

  makeTemplatePerSimulate() {
    let template = PLAIN_STRING;

    return template;
  }

  simulatePerNumberOfTimes() {
    this.cars.forEach(car => {
      // simulate
    });
  }

  makeResultTemplate(number) {
    let template = PLAIN_STRING;
    for (let i = 0; i < number; i = i + 1) {
      this.simulatePerNumberOfTimes();
      // simulate 이후 자동차를 기준으로 템플릿을 만들어 변수에 합친다.
      template = `${template}${this.makeTemplatePerSimulate()}`;
    }

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
    this.initHandler();
    this.formCars.addEventListener('submit', this.onFormCarsSubmit);
    this.formCount.addEventListener('submit', this.onFormCountSubmit);
  }

  initDOM() {
    this.app = document.querySelector(DOM.APP);

    this.formCars = document.querySelector(DOM.CAR_NAMES);
    this.formCount = document.querySelector(DOM.RANCING_COUNT);

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
      } catch (error) {
        this.result.innerHTML = PLAIN_STRING;
        alert(error);
      }
    };
  }
}

new CarGame().init();
