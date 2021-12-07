import RacingCarController from './controller/RacingCarController.js';
import RacingCarModel from './model/RacingCarModel.js';
import RacingCarView from './view/RacingCarView.js';

class App {
  constructor() {
    const model = new RacingCarModel();
    const view = new RacingCarView();
    const controller = new RacingCarController(model, view);

    this.RacingCarController = controller;
    this.RacingCarController.triggerEvent();
  }
}

const app = new App();
