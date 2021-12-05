export default class Winners {
  constructor(carResultInformations) {
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

    return this.winners;
  };

  makeWinnerTemplate = (winners) => {
    this.winnersTemplate = `최종 우승자: <span id="racing-winners">${winners}</span>`;
  };

  makeWinnersTemplate = () => {
    let winnersString = '';
    this.winners.forEach((winner, index) => {
      if (index === this.winners.length - 1) {
        winnersString += `${winner}`;
      }

      if (index < this.winners.length - 1) {
        winnersString += `${winner},`;
      }
    });

    this.makeWinnerTemplate(winnersString);
  };

  countWinners = () => {
    if (this.winners.length === 1) {
      this.makeWinnerTemplate(this.winners[0]);
    }

    if (this.winners.length !== 1) {
      this.makeWinnersTemplate();
    }
  };

  getWinnersTemplate = () => {
    this.countWinners();

    return this.winnersTemplate;
  };
}
