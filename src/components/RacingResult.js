import { $, $$ } from '../utils/dom.js';

class RacingResult {
  constructor() {
    // eslint-disable-next-line prefer-destructuring
    this.$title = $$('h4')[1];
    this.$container = null;
    this.$resultsBuffer = [];
  }

  createDOM() {
    this.$container = document.createElement('div');
    $('#app').appendChild(this.$container);
  }

  render() {
    this.$title.style.display = '';
    this.$container.innerHTML = this.printResultsBufferWithDivider();
  }

  hide() {
    this.$title.style.display = 'none';
  }

  printResultsBufferWithDivider() {
    const divider = '<br />';
    return this.$resultsBuffer.join(divider);
  }

  putBufferOneTryResults(cars) {
    this.$resultsBuffer.push(cars.map(car => `<div>${car.printAdvance()}</div>`).join(''));
  }

  initResults() {
    this.$resultsBuffer = [];
  }
}

export default RacingResult;
