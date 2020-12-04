import Winner from "./winner.js";

export default class Render {
  renderResult = result => {
    const resultContainer = document.querySelector(".result-container");
    const roundResult = document.createElement("p");

    result.forEach(car => {
      const carContainer = document.createElement("div");

      carContainer.innerHTML = `${car.name}: ${this.renderBars(car.position)}`;
      roundResult.appendChild(carContainer);
    });
    resultContainer.appendChild(roundResult);
  };

  renderBars = number => {
    let bars = "";

    for (let i = 0; i < number; i++) {
      bars += "-";
    }

    return bars;
  };

  renderWinners = carsList => {
    const winner = new Winner(carsList);
    const winnerList = winner.getWinners();
    const winnerContainer = document.createElement("div");
    const resultContainer = document.querySelector(".result-container");

    winnerContainer.innerText = `최종 우승자: ${winnerList.join(", ")}`;
    resultContainer.appendChild(winnerContainer);
  };
}
