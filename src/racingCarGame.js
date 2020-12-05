import { STEP } from "./sharedVariable.js";
import Car from "./car.js";

export default class RacingCarGame {
  constructor() {}
  initClass(interfaceToHtml) {
    this.carNameOfWinners = [];
    this.carsInRacing = [];
    this.resultMessage = "";
    this.interfaceToHtml = interfaceToHtml;
  }

  updateInputFromHtml(gameStep, inputValue) {
    switch (gameStep) {
      case STEP.NAME_INPUT:
        this.processNameInput(inputValue);
        break;
      case STEP.RACING_COUNT:
        this.processRacingCount(inputValue);
        break;
      default:
        console.log(inputValue, "오류");
    }
  }
  processNameInput(carNameArray) {
    carNameArray.forEach((carName) => {
      this.carsInRacing.push(new Car(carName));
    });
  }
  processRacingCount(racingCount) {
    for (let i = 0; i < racingCount; i++) {
      this.progressGameOnce();
      this.addCarsPositionToResultMessage();
    }
    this.determineWinners();
    this.addWinnersToResultMessage();
    this.interfaceToHtml.drawGameResult(this.resultMessage);
  }

  progressGameOnce() {
    this.carsInRacing.forEach((car) => {
      car.drive();
    });
  }
  addCarsPositionToResultMessage() {
    this.carsInRacing.forEach((car) => {
      this.resultMessage += `
      ${car.name}: ${"-".repeat(car.positionInRace)}<br>
      `;
    });
    this.resultMessage += "<br>";
  }
  determineWinners() {
    let maxPositionAmongCars = 0;
    this.carsInRacing.forEach((car) => {
      maxPositionAmongCars = Math.max(maxPositionAmongCars, car.positionInRace);
    });
    this.carsInRacing.forEach((car) => {
      if (car.positionInRace === maxPositionAmongCars) {
        this.carNameOfWinners.push(car.name);
      }
    });
  }
  addWinnersToResultMessage() {
    let stringToAdd = "";
    this.carNameOfWinners.forEach((name) => {
      stringToAdd += `, ${name}`;
    });
    stringToAdd = stringToAdd.slice(1);
    this.resultMessage += `최종우승자:${stringToAdd}`;
  }
}
