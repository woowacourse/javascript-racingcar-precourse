const RaceService = require('./RaceService');

class RaceController {
  #service = new RaceService();

  createCar(input) {
    const cars = input.split(',');
    this.#service.createCar(cars);
  }
}
module.exports = RaceController;
