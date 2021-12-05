import { $, $$ } from '../utils/dom.js';

class RacingResult {
  constructor() {
    // eslint-disable-next-line prefer-destructuring
    this.$title = $$('h4')[1];
    this.$container = null;
    this.$results = [];
  }

  createDOM() {
    this.$container = document.createElement('div');
    this.$container.id = 'racing-car-result-container';
    $('#app').appendChild(this.$container);
  }

  render() {
    this.$title.style.display = '';
    this.$container.innerHTML = this.$results.join('<br />');
  }

  hide() {
    this.$title.style.display = 'none';
  }

  runOneTry(cars) {
    this.$results.push(cars.map(car => `<div>${car.printAdvance()}</div>`).join(''));
  }

  initResults() {
    this.$results = [];
  }
}

export default RacingResult;
