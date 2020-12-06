import { setEventListener } from './elementControl.js';
import Car from './car.js';

export default function RacingCarGame() {
  this.carNames = [];
  this.countValue = 0;
  this.carObjectList = [];

  this.setCars = () => {
    this.carNames.forEach(el => {
      this.carObjectList.push(new Car(el));
    });
    console.log(this.carNames);
    console.log(this.countValue);
    console.log(this.carObjectList);
  };
}

const init = game => {
  setEventListener(game);
};

const game = new RacingCarGame();
init(game);
