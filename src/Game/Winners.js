import { DOM } from '../constant/constant.js';

export default class Winners {
  constructor(carResultInformations) {
    this.$app = DOM.$APP;
    this.$span = DOM.$SPAN;
    this.carResultInformations = carResultInformations;
    this.winnersTemplate = '';
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

  set$SpanAttribute = (winners) => {
    this.winnersTemplate = `최종 우승자: <span id="racing-winners">${winners}</span>`;
    this.$span.innerHTML = this.winnersTemplate;
  };

  getWinnerTemplate = (winner) => {
    this.set$SpanAttribute(winner);
    this.$app.appendChild(this.$span);
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

    this.set$SpanAttribute(winnersString);
    this.$app.appendChild(this.$span);
  };

  countWinners = () => {
    if (this.winners.length === 1) {
      this.getWinnerTemplate(this.winners[0]);
      return;
    }

    this.getWinnersTemplate();
  };
}
