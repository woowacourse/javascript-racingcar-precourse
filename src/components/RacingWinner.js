import { $ } from '../utils/dom.js';

class RacingResult {
  constructor() {
    this.$container = null;
    this.$winners = [];
  }

  createDOM() {
    this.$container = document.createElement('div');
    this.$container.id = 'racing-winner-container';
    $('#app').appendChild(this.$container);
  }

  render() {
    this.$container.innerHTML = this.template();
  }

  template() {
    return `
      최종 우승자: <span id="racing-winners">${this.printWinnersWithSplit(this.$winners)}</span>
    `;
  }

  checkWinners(cars) {
    const maximumAdvance = Math.max(...cars.map(car => car.$advance));
    this.$winners = cars.filter(car => car.$advance === maximumAdvance);
  }

  printWinnersWithSplit(winners) {
    return winners.map(winner => winner.$name).join(',');
  }
}

export default RacingResult;
