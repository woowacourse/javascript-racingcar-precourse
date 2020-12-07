import Car from './class/Car.js';
import showWinner from './modules/winner.js';
import showOnGameProgress from './modules/progress.js';
import {gameStart, gameRestart} from './modules/game.js';

export default class RacingCarGame {
  constructor() {
    this.carEntry = [];
  }

  getPlayingCarList(carNameSet) {
    const splitedCarNameSet = carNameSet.split(',');
    for (const carName of splitedCarNameSet) {
      this.carEntry.push(new Car(carName));
    }
  }

  gamePlay(count) {
    for (let i = 0; i < count; i++) {
      this.carEntry.forEach((car) => car.carMove());
      showOnGameProgress(this.carEntry);
    }
    showWinner(this.carEntry);

    return gameRestart();
  }
}

gameStart();
