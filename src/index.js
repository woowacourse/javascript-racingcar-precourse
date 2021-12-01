import CarController from './controller.js';
import CarView from './view.js';
import CarModel from './model.js';

window.addEventListener('DOMContentLoaded', () => {
  const model = new CarModel();
  const view = new CarView(model);
  const controller = new CarController(model, view);
  controller.app();
});
