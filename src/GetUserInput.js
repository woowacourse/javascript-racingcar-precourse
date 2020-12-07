import CheckInput from './CheckInput.js';
import ErrorMsg from './ErrorMsg.js';
/**
 * @author sunhpark42 <sunhpark42@gmail.com>
 * module for getting user inputs.
 */
export default class GetUserInput {
  /**
   * constructor of GetUser Input
   * init cars array and count by 0.
   */
  constructor() {
    this.cars = [];
    this.count = 0;
  };
  /**
   * get Cars' list
   */
  getCars() {
    const carUserInput =
      document.getElementById('car-names-input').value.split(',');
    this.cars = this.cars.concat(carUserInput);
    const validation = new CheckInput().checkCarList(this.cars);
    if (validation !== 1) {
      this.cars.length = 0;
      document.getElementById('car-names-input').value = '';
      alert(new ErrorMsg(validation).errorMsg);
    }
  }
  /**
   * get Count
   * @return {number}
   */
  getCount() {
    this.count =
        Number(document.getElementById('racing-count-input').value);
    const validation = new CheckInput().checkCount(this.cars, this.count);
    if (validation !== 1) {
      alert(new ErrorMsg().setError(validation));
    }
    return validation;
  };
};
