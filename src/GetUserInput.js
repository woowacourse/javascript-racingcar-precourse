import CheckInput from './CheckInput.js';
import ErrorMsg from './ErrorMsg.js';

export default class GetUserInput {
  constructor() {
    this.cars = [];
    this.count = 0;
  };

  getCars() {
    this.cars =
      this.cars.concat(document.getElementById('car-names-input').value.split(','));
    this.cars = this.cars.map((car) => car.trim());
    const validation = new CheckInput().checkCarList(this.cars);
    
    if (validation !== 1) {
      this.cars.length = 0;
      alert(new ErrorMsg().setError(validation));
    }

    return validation;
  }

  getCount() {
    this.count =
        Number(document.getElementById('racing-count-input').value);
    const validation = new CheckInput().checkCount(this.count);
    
    if (validation !== 1) {
      alert(new ErrorMsg().setError(validation));
    }

    return validation;
  };
};
