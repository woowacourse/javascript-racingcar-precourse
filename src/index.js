import RacingController from './controller.js';
import RacingView from './view.js';
import RacingModel from './model.js';

window.addEventListener('DOMContentLoaded', () => {
  const model = new RacingModel();
  const view = new RacingView();
  const controller = new RacingController(model, view);
  controller.app();
});
