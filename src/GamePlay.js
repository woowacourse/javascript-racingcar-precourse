import Car from './Car.js';
import Show from './Show.js';

export default class GamePlay {
  constructor(carNameArray, count) {
    this.winners = [];
    this.cars = this.setCars(carNameArray);
    this.count = count;
  };

  setCars(carNameArray) {
    const cars = [];

    carNameArray.forEach((name) => {
      cars.push(new Car(name));
    });
    
    return cars;
  }

  playEachGame() {
    this.cars.forEach((car) => {
      car.play();
    });
  }

  getWinners() {
    const positions = this.cars.map((car) => car.position);
    const max = Math.max(...positions);

    this.cars.forEach((car) => {
      if (car.position === max) {
        this.winners.push(car.name);
      }
    });
  };

  play() {
    for (let i = 0; i < this.count; i++) {
      this.playEachGame();
      new Show().showGameStatus(this.cars);
    };
    this.getWinners(this.cars);
    new Show().showGameResult(this.winners);
  }
}
