import Car from './car.js';
import generateRandomNumber from './game/utils/generateRandomNumber.js';
import isMovable from './game/utils/isMovable.js';
import hasDuplicate from './utils/hasDuplicate.js';
import isValidCarName from './game/utils/isValidCarName.js';
import toCarNameList from './game/utils/toCarNameList.js';
import { TEXT_CAR_POSITION } from './dom/const.js';
import { VALIDE_CONDITION_RACING_COUNT } from './game/const.js';

export default class RacingGameManager {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
    this.winners = [];
  }

  static isValidCarNamesInput(input) {
    const carNames = toCarNameList(input);

    return (
      !hasDuplicate(carNames) &&
      carNames.every((carName) => isValidCarName(carName))
    );
  }

  static isValidRacingCountInput(input) {
    const count = Number(input);
    const { min } = VALIDE_CONDITION_RACING_COUNT;

    return Number.isInteger(count) && count >= min;
  }

  getCars() {
    return this.cars;
  }

  getRacingCount() {
    return this.racingCount;
  }

  getWinners() {
    return this.winners;
  }

  setCarsByInput(input) {
    this.cars = Car.generateCarsByNames(toCarNameList(input));
  }

  setRacingCountByInput(input) {
    this.racingCount = Number(input);
  }

  race() {
    this.cars.forEach((car) => {
      const randomNum = generateRandomNumber();
      if (isMovable(randomNum)) car.move();
    });
  }

  getMaxPosition() {
    return Math.max(...this.cars.map((car) => car.getPosition()));
  }

  getCarsByPosition(position) {
    return this.cars.filter((car) => car.getPosition() === position);
  }

  getCurrentRaceStatus() {
    const raceStatus = this.cars.map((car) => {
      const name = car.getName();
      const position = TEXT_CAR_POSITION.repeat(car.getPosition());
      const status = `${name}: ${position}`;

      return status;
    });

    return raceStatus;
  }

  judgeWinners() {
    const maxPosition = this.getMaxPosition();
    const winners = this.getCarsByPosition(maxPosition).map((car) =>
      car.getName()
    );

    this.winners = winners;
  }
}
