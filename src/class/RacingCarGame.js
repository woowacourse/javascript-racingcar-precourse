import Car from './Car.js';
import showWinner from '../modules/winner.js';
import showOnGameProgress from '../modules/progress.js';

export default class RacingCarGame {
  constructor() {
    this.carsArray = [];
  }

  getPlayingCarList(carNameList) {
    const carNameListArray = carNameList.split(',');
    for (const carName of carNameListArray) {
      this.carsArray.push(new Car(carName));
    }
  }

  gamePlay(times) {
    for (let i = 0; i < times; i++) {
      this.carsArray.forEach((car) => car.carMove());
      showOnGameProgress(this.carsArray);
    }

    return showWinner(this.carsArray);
  }
}
