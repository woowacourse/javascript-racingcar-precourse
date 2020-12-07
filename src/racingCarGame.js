import { STEP } from "./sharedVariable.js";
import Car from "./car.js";

export default class RacingCarGame {
  constructor() {}
  initClass(interfaceToHtml) {
    this.carNameOfWinners = [];
    this.carsInRacing = [];
    this.interfaceToHtml = interfaceToHtml;
  }

  updateFromHtmlInput(gameStep, inputValue) {
    switch (gameStep) {
      case STEP.NAME_INPUT:
        this.executeNameInputStep(inputValue);
        break;
      case STEP.RACING_COUNT:
        this.executeRacingCountStep(inputValue);
        break;
      default:
        console.log(inputValue, "오류");
    }
  }

  executeNameInputStep(carNameArray) {
    carNameArray.forEach((carName) => {
      this.carsInRacing.push(new Car(carName));
    });
  }

  executeRacingCountStep(racingCount) {
    let resultMessage = "";
    for (let i = 0; i < racingCount; i++) {
      this.progressGameOnce();
      resultMessage += this.makeMessageAboutCarsPosition();
    }
    this.determineWinners();
    resultMessage += this.makeMessageAboutWinner();

    this.interfaceToHtml.drawGameResult(resultMessage);
  }
  progressGameOnce() {
    this.carsInRacing.forEach((car) => {
      car.drive();
    });
  }
  makeMessageAboutCarsPosition() {
    let message = "";
    this.carsInRacing.forEach((car) => {
      message += `
      ${car.name}: ${"-".repeat(car.positionInRace)}<br>
      `;
    });
    message += "<br>";
    return message;
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
  makeMessageAboutWinner() {
    let message = "";
    this.carNameOfWinners.forEach((name) => {
      message += `, ${name}`;
    });
    message = message.slice(1);
    message = `최종우승자:${message}`;
    return message;
  }
}
