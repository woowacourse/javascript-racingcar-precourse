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
    this.tryCount = 0;
  };
  /**
   * get Car lists
   */
  getCarList() {
    cars = document.getElementById('car-names-input').nodeValue.split(',');
  };
  /**
   * check Validation of UserInput
   * @return {boolean}
   */
  checkCarList() {
    let isValid = true;

    if (cars.length <= 1) {
      isValid = false;
    }
    cars.forEach((car) => {
      if (car.length > 5) {
        isValid = false;
      }
    });
    return isValid;
  };
  /**
   * getTryCount
   */
  getTryCount() {
    tryCount = Number(document.getElementById('#racing-count-input').nodeValue);
  };
  /**
   * check TryCount Validtion
   * @return {boolean}
   */
  checkTryCount() {
    const isValid = true;
    if (tryCount <= 0) {
      isValid = false;
    }
    return isValid;
  }
  /**
   * get Winner of Cars
   */
  getWinners() {
    const positions = cars.map((car) => car.position);
    const max = Math.max(...positions);

    cars.forEach((car) => {
      if (car.position === max) {
        winners.push(car.name);
      }
    });
  };
}

new RacingCarGame();
