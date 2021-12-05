import { isConditionToMove } from '../utils/random.js';

const $app = document.getElementById('app');

export default class RacingGame {
  constructor(carList) {
    this.carList = carList;
  }

  start(numberOfAttemps) {
    for (let i = 0; i < numberOfAttemps; i++) {
      this.carList = this.carList.map(car => ({
        ...car,
        racingCount: isConditionToMove() ? car.racingCount + 1 : car.racingCount,
      }));

      this.renderResult();
    }
  }

  renderResult() {
    let $div = document.createElement('div');
    let $br = document.createElement('br');

    $div.innerHTML = this.carList
      .map(({ name, racingCount }) => `${name}: ${''.padStart(racingCount, '-')}`)
      .join('<br />');

    $app.appendChild($div);
    $app.appendChild($br);
  }
}
