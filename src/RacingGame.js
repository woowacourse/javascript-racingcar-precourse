import Car from './car.js';

export default class RacingGame {
  constructor(carNames, racingCount) {
    this.$racingWinner = document.getElementById('racing-winner');
    this.$app = document.getElementById('app');
    this.carNames = carNames;
    this.racingCount = racingCount;
    this.cars = [];

    this.makeCars(this.carNames);
    this.winner = this.findWinner(this.cars);
    this.printWinner(this.winner);
  }

  makeCars(carNames) {
    for (let i = 0; i < carNames.length; i += 1) {
      const car = new Car(carNames[i]);
      this.cars.push(car);
    }
  }

  findWinner(cars) {
    let maxDistance = cars[0].totalDistance;
    let winner = [];

    for (let i = 0; i < cars.length; i += 1) {
      if (cars[i].totalDistance === maxDistance) {
        winner.push(cars[i].name);
      } else if (cars[i].totalDistance > maxDistance) {
        winner = [];
        winner.push(cars[i].name);
        maxDistance = cars[i].totalDistance;
      }
    }

    return winner;
  }

  initElement() {
    const element = [];

    this.cars.forEach((car) => {
      element.push(`${car.name}: `);
    });

    return element;
  }

  addDistance(text, element, index) {
    if (text === true) {
      element[index] += '-';
    }
    return this.$app.insertAdjacentHTML('beforeend', `${element[index]}<br>`);
  }

  printRacing() {
    const element = this.initElement();

    for (let i = 0; i < this.racingCount; i += 1) {
      element.forEach((string, index) => {
        this.addDistance(this.cars[index].moveArray[i], element, index);
      });
      this.$app.insertAdjacentHTML('beforeend', `<br>`);
    }
  }

  printWinner(winner) {
    const winnerNames = winner.join();
    let element = `<span>최종 우승자: </span>`;

    element += `<span id="racing-winners">${winnerNames}</span><br>`;
    this.printRacing();
    this.$app.insertAdjacentHTML('beforeend', element);
  }
}
