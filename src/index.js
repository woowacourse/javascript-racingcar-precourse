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
    this.cars = document.getElementById('car-names-input').nodeValue.split(',');
  };
  /**
   * check Validation of UserInput
   * @return {boolean}
   */
  checkCarList() {
    let isValid = true;

    if (this.cars.length <= 1) {
      isValid = false;
    }
    this.cars.forEach((car) => {
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
    this.tryCount =
        Number(document.getElementById('#racing-count-input').nodeValue);
  };
  /**
   * check TryCount Validtion
   * @return {boolean}
   */
  checkTryCount() {
    let isValid = true;
    if (this.tryCount <= 0) {
      isValid = false;
    }
    return isValid;
  }
  /**
   * play each game
   */
  playEachGame() {
    this.cars.forEach((car) => {
      if (car.getNumber() >= 4) {
        car.go();
      }
    });
  }
  /**
   * get Winner of Cars
   */
  getWinners() {
    const positions = this.cars.map((car) => car.position);
    const max = Math.max(...positions);

    this.cars.forEach((car) => {
      if (car.position === max) {
        this.winners.push(car.name);
      }
    });
  };
}

new RacingCarGame();
