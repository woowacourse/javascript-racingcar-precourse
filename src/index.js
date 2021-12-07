import View from './view/view.js';
import Controller from './controller/controller.js';
import Car from './model/car.js';

class RacingGame {
  constructor() {
    this.view = new View;
    this.model = new Car;
    this.controller = new Controller(this.model, this.view);
    this.controller.init();
  }
}

new RacingGame();