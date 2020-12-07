/**
 * module for showing results on page
 */
export default class Show {
  /**
   * show game status
   * @param {Array} cars
   */
  showGameStatus(cars) {
    cars.forEach((car) => {
      const positionBar = '-'.repeat(car.position);
      console.log(`${car.name} : ${positionBar}`);
    });
  }
  /**
   * show game result.
   * @param {Array} winners
   */
  showGameResult(winners) {
    console.log(`winner is ${winners}`);
  }
};
