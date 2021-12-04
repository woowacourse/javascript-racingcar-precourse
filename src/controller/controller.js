import { Car } from '../model/Car.js';
import { $, showGameResultHeader } from '../utils/dom.js';
import { MOVE_CONDITION_NUMBER, MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';
import { genRandomNumber } from '../utils/genRandomNumber.js';

export class Controller {
  genCarInstances(carNames) {
    return String(carNames)
      .split(',')
      .map((carName) => new Car(carName));
  }

  calculateMovedState(cars) {
    cars.forEach((car) => {
      if (genRandomNumber(MIN_NUMBER, MAX_NUMBER) >= MOVE_CONDITION_NUMBER) {
        car.move();
      }
    });
  }

  getMaxMovedDistance(cars) {
    return Math.max(...cars.map((car) => car.getDistance()));
  }

  getWinner(cars) {
    const maxMovedDistance = this.getMaxMovedDistance(cars);

    return cars
      .filter((car) => car.getDistance() === maxMovedDistance)
      .map((car) => car.getName())
      .join(', ');
  }

  renderMovedState(cars) {
    let domElement = '';
    this.calculateMovedState(cars);

    cars.forEach((car) => {
      domElement += `<span>${car.getName()}: ${'-'.repeat(car.getDistance())}</span><br />`;
    });
    domElement += `<br />`;

    return domElement;
  }

  renderWinner(cars) {
    return `<span>최종 우승자: </span>
    <span id="racing-winners">${this.getWinner(cars)}</span>
    <br /><br />`;
  }

  renderGameResult(carNames, racingCount) {
    showGameResultHeader();
    let domElement = '';
    const cars = this.genCarInstances(carNames);

    for (let i = 0; i < racingCount; i++) {
      domElement += this.renderMovedState(cars);
    }

    domElement += this.renderWinner(cars);
    $('#app').insertAdjacentHTML('beforeend', domElement);
  }
}
