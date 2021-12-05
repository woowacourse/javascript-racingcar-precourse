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

    this.renderWinner();
  }

  renderResult() {
    const $div = document.createElement('div');
    const $br = document.createElement('br');

    $div.innerHTML = this.carList
      .map(({ name, racingCount }) => `${name}: ${''.padStart(racingCount, '-')}`)
      .join('<br />');

    $app.appendChild($div);
    $app.appendChild($br);
  }

  renderWinner() {
    const $span = document.createElement('span');
    $span.setAttribute('id', 'racing-winners');

    const maxRacingCount = Math.max(...this.carList.map(({ racingCount }) => racingCount));

    $span.innerHTML = this.carList
      .filter(({ racingCount }) => racingCount === maxRacingCount)
      .map(({ name }) => name)
      .join(',');

    $app.appendChild($span);
  }
}
