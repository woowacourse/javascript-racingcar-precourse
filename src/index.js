/**
 * @author sunhpark42 <sunhpark42@gmail.com>
 */
export default class RacingCarGame {
  /**
   * variable for racing car game
   */
  constructor() {
    this.winners = [];
    this.cars = [];
  };
  /**
   * get Car lists
   * @return {Array}
   */
  getCarList() {
    const carList =
      document.getElementById('car-names-input').nodeValue.split(',');
    return carList;
  };
  /**
   * check Validation of UserInput
   * @param {Array} carList
   * @return {boolean}
   */
  checkCarList(carList) {
    let isValid = true;

    if (carList.length <= 1) {
      isValid = false;
    }
    carList.forEach((car) => {
      if (car.length > 5) {
        isValid = false;
      }
    });
    return isValid;
  };
  /**
   * getTryCount
   * @return {number}
   */
  getTryCount() {
    const tryCount =
      Number(document.getElementById('#racing-count-input').nodeValue);
    return tryCount;
  };
  /**
   * check TryCount Validtion
   * @param {number} tryCount
   * @return {boolean}
   */
  checkTryCount(tryCount) {
    const isValid = true;
    if (tryCount <= 0) {
      isValid = false;
    }
    return isValid;
  }
  /**
   * get Winner of Cars
   * @param {Array} carList
   * @return {Array} winners
   */
  getWinners(carList) {
    const winners = [];
    const positions = carList.map((car) => car.position);
    const max = Math.max(...positions);

    carList.forEach((car) => {
      if (car.position === max) {
        winners.push(car.name);
      }
    });

    return winners;
  };
}
