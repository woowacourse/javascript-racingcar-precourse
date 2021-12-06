import { $carNamesInput, $carNamesSubmit } from '../constants/HTMLconstant.js';
import validCarNames from '../validator/validCarName.js';
import Car from '../Car.js';

export default class CarNameForm {
  constructor() {
    this.$input = $carNamesInput;
    this.$submit = $carNamesSubmit;
  }

  getValidation() {
    return validCarNames(this.$input.value);
  }

  setCarName() {
    const carGroup = [];
    this.$input.value.split(',').forEach(carName => {
      const car = new Car(carName);
      carGroup.push(car);
    });
    return carGroup;
  }
}
