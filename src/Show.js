/**
 * module for showing results on page
 */
export default class Show {
  /**
   * show game status
   * @param {Array} cars
   */
  showGameStatus(cars) {
    let statusString = '';
    cars.forEach((car) => {
      const positionBar = '-'.repeat(car.position);
      statusString += (`${car.name} : ${positionBar}<br>`);
    });
    document.getElementById('game-status').innerHTML += (statusString + `<br>`);
  }
  /**
   * show game result.
   * @param {Array} winners
   */
  showGameResult(winners) {
    document.getElementById('game-result').innerHTML = `최종 우승자 : ${winners}`;
  }
};