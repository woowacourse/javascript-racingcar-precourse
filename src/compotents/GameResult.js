export class GameResult {
  constructor({ getWinners }) {
    this.resultHTML = ``;
    this.getWinners = getWinners;
    this.initializeDOM();
  }

  initializeDOM = () => {
    this.resultHTML = this.getHeaderHTML();
    console.log(this.resultHTML);
    this.resultContainer = document.getElementById("result-container");
  };

  updateResultPerRound = (cars) => {
    cars.forEach((car) => {
      this.resultHTML += this.getCarHTML(car.name, car.distance);
    });
    this.resultHTML += `<br/>`;


  getCarHTML = (name, distance) => {
    return `<span>${name}: ${"-".repeat(distance)}</span><br/>`;
  };

  getWinnerHTML = (names) => {
    console.log(names);
    return `<p>최종 우승자 ${names.join(",")}</p>`;
  };

  getHeaderHTML = () => {
    return `<h4>📄 실행 결과</h4>`;
  };
}
