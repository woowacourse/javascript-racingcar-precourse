import Car from './Car.js';
import Show from './Show.js';
/**
 * @author sunhpark42 <sunhpark42@gmail.com>
 * module for game play
 */
export default class GamePlay {
  /**
   * variable for racing car game
   * @param {Array} carNameArray
   * @param {Number} count
   */
  constructor(carNameArray, count) {
    this.winners = [];
    this.cars = this.setCars(carNameArray);
    this.count = count;
  };
  /**
   * set Cars Array
   * @param {Array} carNameArray
   * @return {Array}
   */
  setCars(carNameArray) {
    const cars = [];
    carNameArray.forEach((name) => {
      cars.push(new Car(name));
    });
    return cars;
  }
  /**
   * play each game
   */
  playEachGame() {
    this.cars.forEach((car) => {
      car.play();
    });
  }
  /**
   * get Winner of Cars
   */
  getWinners() {
    const positions = this.cars.map((car) => car.position);
    const max = Math.max(...positions);

    this.cars.forEach((car) => {
      if (car.position === max) {
        this.winners.push(car.name);
      }
    });
  };
  /**
   * play game by count
   */
  play() {
    for (let i = 0; i < this.count; i++) {
      this.playEachGame();
      new Show().showGameStatus(this.cars);
    };
    this.getWinners(this.cars);
    new Show().showGameResult(this.winners);
  }
}
