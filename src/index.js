import Car from './class/Car.js';
import showWinner from './modules/winner.js';
import showOnGameProgress from './modules/progress.js';
import {gameStart, gameRestart} from './modules/game.js';

export default class RacingCarGame {
  constructor() {
    this.carEntry = [];
  }

  getPlayingCarList(carNameList) {
    const carNameListArray = carNameList.split(',');
    for (const carName of carNameListArray) {
      this.carEntry.push(new Car(carName));
    }
  }

  gamePlay(times) {
    for (let i = 0; i < times; i++) {
      this.carEntry.forEach((car) => car.carMove());
      showOnGameProgress(this.carEntry);
    }
    showWinner(this.carEntry);

    return gameRestart();
  }
}

gameStart();
