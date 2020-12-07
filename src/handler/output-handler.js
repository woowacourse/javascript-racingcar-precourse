export default class OutputHandler {
  constructor() {
    this.gameResultContainer = document.getElementById("game-result-container");
  }

  createRaceHTML(raceCarPositions) {
    let raceHTML = `<p>`;

    for (let carPosition of raceCarPositions) {
      for (let carName in carPosition) {
        raceHTML += `${carName}: ${carPosition[carName]}<br>`;
      }

      raceHTML += `</p>`;
    }

    return raceHTML;
  }

  createWinnerHTML(winners) {
    const winnerString = winners.join(",");
    const winnerHTML = `<div> 최종 우승자: ${winnerString} </div>`;

    return winnerHTML;
  }

  renderResultContainer(templateHTML) {
    this.gameResultContainer.innerHTML = templateHTML;
  }
}
