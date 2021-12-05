import { isConditionToMove } from '../utils/random.js';

export default class RacingGame {
  constructor(carList) {
    this.carList = carList;
  }

  start(numberOfAttemps) {
    for (let i = 0; i < numberOfAttemps; i++) {
      this.carList = this.carList.map(car => ({
        ...car,
        racingCount: isConditionToMove() ? car.racingCount + 1 : car.racingCount,
      }));

      this.render();
    }
  }
}
