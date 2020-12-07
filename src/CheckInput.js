/**
 * @author sunhpark42 <sunhpark42@gmail.com>
 * module for checking user input's validataion
 */
export default class CheckInput {
  /**
   * init value
   */
  constructor() {
  };
  /**
   * check car name length
   * @param {object} car
   * @return {boolean}
   */
  checkCarNameLength(car) {
    return car.length <= 5 && car.length > 0;
  }
  /**
   * check duplication
   * @param {Array} cars
   * @param {object} car
   * @return {boolean}
   */
  checkNameDuplication(cars, car) {
    return cars.indexOf(car) === cars.lastIndexOf(car);
  }
  /**
   * check Validation of Cars
   * @param {Array} cars
   * @return {number}
   */
  checkCarList(cars) {
    let validation = 1;
    if (cars.length <= 1) {
      return -1;
    }
    cars.forEach((car) => {
      if (this.checkCarNameLength(car) === false) {
        validation = -2;
      } else if (this.checkNameDuplication(cars, car) === false) {
        validation = -3;
      };
    });
    return validation;
  };
  /**
   * check Validatation of Count
   * @param {Array} cars
   * @param {number} count
   * @return {number}
   */
  checkCount(cars, count) {
    if (cars.length === 0) {
      return -4;
    }
    if (count <= 0) {
      return -5;
    }
    return 1;
  }
};
