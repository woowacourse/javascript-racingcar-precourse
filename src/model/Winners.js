import { DOM } from '../utils/constant.js';
import Render from '../view/Render.js';

export default class Winners {
  constructor(carResultInformations) {
    this.render = new Render();
    this.$app = DOM.$APP;
    this.$span = DOM.$SPAN;
    this.carResultInformations = carResultInformations;
    this.winnersTemplate = '';
    this.winners = [];
  }

  compareDistance = (currentCarName, maxDistance, currentDistance) => {
    if (maxDistance < currentDistance) {
      this.winners = [];
      this.winners.push(currentCarName);

      return currentDistance;
    }

    if (maxDistance === currentDistance) {
      this.winners.push(currentCarName);
    }

    return maxDistance;
  };

  getWinners = () => {
    this.carResultInformations.reduce((maxDistance, currentInformation) => {
      const [currentCarName, currentDistance] = currentInformation;

      return this.compareDistance(currentCarName, maxDistance, currentDistance);
    }, 0);
  };

  getWinnerTemplate = (winners) => {
    this.winnersTemplate = `최종 우승자: <span id="racing-winners">${winners}</span>`;
  };

  getWinnersTemplate = () => {
    let winnersString = '';
    this.winners.forEach((winner, index) => {
      if (index === this.winners.length - 1) {
        winnersString += `${winner}`;
      }

      if (index < this.winners.length - 1) {
        winnersString += `${winner},`;
      }
    });

    this.getWinnerTemplate(winnersString);
  };

  countWinners = () => {
    if (this.winners.length === 1) {
      this.getWinnerTemplate(this.winners[0]);
    }

    if (this.winners.length !== 1) {
      this.getWinnersTemplate();
    }

    this.render.template(this.$span, this.$app, this.winnersTemplate);
  };
}
