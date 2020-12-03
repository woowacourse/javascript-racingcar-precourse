import Car from './car.js';
import showWinner from './winner.js';
import showOnGameProgress from './progress.js';

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
