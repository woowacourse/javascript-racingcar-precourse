import RacingGameController from './controller/RacingGameController.js';
import RacingGameModel from './model/RacingGameModel.js';
import RacingGameView from './view/RacingGameView.js';

class App {
  constructor() {
    const model = new RacingGameModel();
    const view = new RacingGameView();
    const controller = new RacingGameController(model, view);

    controller.triggerEvent();
  }
}

const app = new App();
