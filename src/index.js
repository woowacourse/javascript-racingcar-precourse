import Car from './model/Car.js';
import { GAME_RULE } from './utils/constants.js';
import { $id, initScreen, showRacingCountScreen, showRacingResultScreen } from './utils/dom.js';
import getRandomNumber from './utils/getRandomNumber.js';
import { renderGame, renderWinner } from './utils/render.js';
import { isValidateCarNames, isValidateRacingCount } from './utils/validation.js';

class RacingGame {
  constructor() {
    this.racingCars = [];
    this.racingCount = 0;
  }

  init() {
    initScreen();
    this.preventFormSubmitEvent();
    this.triggerCarNamesSubmitEvent();
    this.triggerRacingCountSubmitEvent();
  }

  setRacingCars(carNamesInput) {
    this.racingCars = carNamesInput.split(',').map((carName) => new Car(carName));
  }

  setRacingCount(racingCount) {
    this.racingCount = parseInt(racingCount, 10);
  }

  runGame() {
    for (let i = 0; i < this.racingCount; i++) {
      this.tryMove();
      renderGame(this.racingCars);
    }

    const winnerList = this.getWinner();
    renderWinner(winnerList);
  }

  tryMove() {
    this.racingCars.forEach((car) => {
      const randomNumber = getRandomNumber();

      if (randomNumber >= GAME_RULE.MOVE_CONDITION_NUMBER) {
        car.move();
      }
    });
  }

  getWinner() {
    const maxDistance = Math.max(...this.racingCars.map((car) => car.getDistance()));

    return this.racingCars.reduce((result, car) => {
      if (car.getDistance() === maxDistance) {
        result.push(car.getName());
      }
      return result;
    }, []);
  }

  preventFormSubmitEvent() {
    $id('car-names-form').addEventListener('submit', (e) => e.preventDefault());
    $id('racing-count-form').addEventListener('submit', (e) => e.preventDefault());
  }

  triggerCarNamesSubmitEvent() {
    $id('car-names-submit').addEventListener('click', () => {
      const carNamesInput = $id('car-names-input').value;

      if (isValidateCarNames(carNamesInput)) {
        this.setRacingCars(carNamesInput);
        showRacingCountScreen();
      }
    });
  }

  triggerRacingCountSubmitEvent() {
    $id('racing-count-submit').addEventListener('click', () => {
      const racingCountInput = $id('racing-count-input').value;

      if (isValidateRacingCount(racingCountInput)) {
        this.setRacingCount(racingCountInput);
        showRacingResultScreen();
        this.runGame();
      }
    });
  }
}

const game = new RacingGame();

game.init();
