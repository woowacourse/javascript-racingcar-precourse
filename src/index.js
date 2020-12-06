import { setEventListener } from './elementControl.js';
import { random } from './utils.js';
import Car from './car.js';

export default function RacingCarGame() {
  this.carNames = [];
  this.countValue = 0;
  this.carObjectList = [];

  this.moveCars = (cars, count) => {
    for (let i = 0; i < count; i++) {
      for (let car of cars) {
        stopOrGo(car);
      }
    }
  };

  this.setCars = () => {
    this.carNames.forEach(el => {
      this.carObjectList.push(new Car(el));
    });
    this.moveCars(this.carObjectList, this.countValue);
  };

  const stopOrGo = car => {
    const randomValue = random();
    if (randomValue >= 4) {
      car.move();
    }
  };
}

const init = game => {
  setEventListener(game);
};

const game = new RacingCarGame();
init(game);
