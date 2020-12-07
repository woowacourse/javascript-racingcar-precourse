import { setEventListener, showRacing } from './elementControl.js';
import { random, findMaxDistance, findSameValue } from './utils.js';
import Car from './car.js';

export default function RacingCarGame() {
  this.carNames = [];
  this.countValue = 0;
  this.carObjectList = [];

  this.moveCars = () => {
    for (let i = 0; i < this.countValue; i++) {
      for (let car of this.carObjectList) {
        this.stopOrGo(car);
      }
      showRacing(this.carObjectList);
    }
    this.findWinner();
  };

  this.setCars = () => {
    this.carNames.forEach(el => {
      this.carObjectList.push(new Car(el));
    });
    this.moveCars();
  };

  this.stopOrGo = car => {
    const randomValue = random();
    if (randomValue >= 4) {
      car.move();
    }
  };

  this.findWinner = () => {
    const maxDistance = findMaxDistance(this.carObjectList);
    const winners = findSameValue(this.carObjectList, maxDistance);
    showWinners(winners);
  };
}

const init = game => {
  setEventListener(game);
};

const game = new RacingCarGame();
init(game);
