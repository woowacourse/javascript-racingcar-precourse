import Car from '/src/lib/car.js';
import {
  testMessage,
} from '/src/lib/check.js';

export default class RacingCarGame {

}

let car = new Car('hello');
console.log(car);
console.log(testMessage);

let game = new RacingCarGame();
