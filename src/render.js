export default class Render {
  renderResult = result => {
    const resultContainer = document.querySelector(".result-container");
    const roundResult = document.createElement("p");

    result.forEach(car => {
      const carInfo = document.createElement("div");

      carInfo.innerHTML = `${car.name}: ${this.renderBars(car.position)}`;
      roundResult.appendChild(carInfo);
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
}
