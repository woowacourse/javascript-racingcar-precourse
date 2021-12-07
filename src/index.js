import Controller from './controller/controller.js';

class RacingGame {
  constructor() {
    this.controller = new Controller();
    this.controller.init();
  }
}

new RacingGame();