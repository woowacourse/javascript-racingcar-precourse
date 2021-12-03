import Car from '../Car/Car.js';
import { DOM } from '../constant/constant.js';
import RandomNumber from '../getRandomNumber/RandomNumber.js';

export default class Game {
  constructor(racingCount, carNames) {
    this.$app = DOM.$APP;
    this.$div = DOM.$DIV;
    this.$span = DOM.$SPAN;
    this.racingCount = racingCount;
    this.carNames = carNames;
    this.carResultInformations = [];
    this.randomNumbers = [];
    this.resultRacings = [];
    this.winners = [];
    this.racingTemplate = '';
    this.winnerTemplate = '';
    this.winnersTemplate = '';
  }

  renderTemplate = (template) => {
    this.$div.innerHTML = template;
    this.$app.appendChild(this.$div);
  };

  getRacingTemplate = () => {
    for (let columnIndex = 0; columnIndex < this.resultRacings[0].length; columnIndex += 1) {
      for (let rowIndex = 0; rowIndex < this.resultRacings.length; rowIndex += 1) {
        this.racingTemplate += `<div>${this.resultRacings[rowIndex][columnIndex]}</div>`;
      }

      this.racingTemplate += '<br />';
    }

    this.renderTemplate(this.racingTemplate);
  };

  getResultString = (car) => {
    return car.resultString();
  };

  isMoveCar = (randomNumber, car) => {
    if (randomNumber >= 4) {
      car.distanceIncrease();
    }
  };

  racingGameStart = () => {
    this.carNames.forEach((currentCarName, currentCarIndex) => {
      const currentCar = new Car(currentCarName);
      const currentCarResultRacing = [];

      for (let currentCount = 0; currentCount < this.racingCount; currentCount += 1) {
        this.isMoveCar(this.randomNumbers[currentCount][currentCarIndex], currentCar);
        currentCarResultRacing.push(this.getResultString(currentCar));
      }

      this.carResultInformations.push(currentCar.information());
      this.resultRacings.push(currentCarResultRacing);
    });
  };

  getRandomNumbers = () => {
    this.randomNumber = new RandomNumber(this.carNames, this.racingCount);
    this.randomNumbers = this.randomNumber.get();
  };

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
    this.$span.textContent = `최종 우승자: ${winners}`;
    this.$span.setAttribute('id', 'racing-winners');
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

  start = () => {
    this.getRandomNumbers();
    this.racingGameStart();
    this.getRacingTemplate();
    this.getWinners();
    this.countWinners();
  };
}
