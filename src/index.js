import { setEventListener, showRacing } from './elementControl.js';
import { stopOrGo, findWinner } from './game.js';
import Car from './car.js';

export default function RacingCarGame() {
  this.carNames = [];
  this.countValue = 0;
  this.carObjectList = [];

  this.moveCars = () => {
    for (let i = 0; i < this.countValue; i++) {
      for (let car of this.carObjectList) {
        stopOrGo(car);
      }
      showRacing(this.carObjectList);
    }
    findWinner(this.carObjectList);
  };

  this.setCars = () => {
    this.carNames.forEach(el => {
      this.carObjectList.push(new Car(el));
    });
    this.moveCars();
  };
}

const init = game => {
  setEventListener(game);
};

const game = new RacingCarGame();
init(game);
