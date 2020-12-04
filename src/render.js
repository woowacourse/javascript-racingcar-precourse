import { EMPTY_STRING } from "./constants.js";
import Winner from "./winner.js";

export default class Render {
  renderResult = roundResult => {
    const resultContainer = document.querySelector(".result-container");
    const roundContainer = document.createElement("p");

    roundResult.forEach(car => {
      const carContainer = document.createElement("div");

      carContainer.innerHTML = `${car.name}: ${this.renderBars(car.position)}`;
      roundContainer.appendChild(carContainer);
    });
    resultContainer.appendChild(roundContainer);
  };

  renderBars = count => {
    let bars = EMPTY_STRING;

    for (let i = 0; i < count; i++) {
      bars += "-";
    }

    return bars;
  };

  renderWinners = cars => {
    const winner = new Winner(cars);
    const winners = winner.getWinners();
    const winnerContainer = document.createElement("div");
    const resultContainer = document.querySelector(".result-container");

    winnerContainer.innerHTML = `최종 우승자: ${winners.join(", ")}`;
    resultContainer.appendChild(winnerContainer);
  };
}
