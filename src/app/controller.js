import { DOM, PLAIN_STRING, SEPERATOR } from '../lib/constants.js';
import CarGameUtil from './util.js';

class CarGameController {
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

  generateEachSimulateTemplate() {
    let template = PLAIN_STRING;
    this.cars.forEach((car) => {
      template = `${template}${car.name}: ${car.countTemplate}<br>`;
    });

    return template;
  }

  generateAllSimulateTemplate(number) {
    let template = PLAIN_STRING;
    for (let i = 0; i < number; i = i + 1) {
      this.simulatePerNumberOfTimes();
      // simulate 이후 자동차를 기준으로 템플릿을 만들어 변수에 합친다.
      template = `${template}${this.generateEachSimulateTemplate()}<br>`;
    }

    return template;
  }

  generateWinnerTemplate() {
    const winnerArray = this.getWinner();

    return `최종 우승자: <span id="${DOM.RACING_WINNERS}">${winnerArray
      .map((car) => car.name)
      .join(SEPERATOR)}</span>`;
  }

  generateResultTemplate(number) {
    if (CarGameUtil.isValidNumber(number)) {
      return `${this.generateAllSimulateTemplate(number)}${this.generateWinnerTemplate()}`;
    }

    return PLAIN_STRING;
  }
}
export default CarGameController;
