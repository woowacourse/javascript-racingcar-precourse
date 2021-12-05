import GameController from "./controller/gameController.js";

class App {
  constructor() {
    this.init();
  }

  init() {
    new GameController();
  }
}

new App();
