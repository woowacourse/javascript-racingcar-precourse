const RaceService = require('./RaceService');

class RaceController {
  #service = new RaceService();

  createCar(input) {
    const cars = input.split(',');
    this.#service.createCar(cars);
  }

  getResult(input) {
    this.#service.getResult(input);
  }
}
module.exports = RaceController;
