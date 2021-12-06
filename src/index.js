import Car from './model/Car.js';
import { $, initScreen, showRacingCountScreen, showRacingResultScreen } from './utils/dom.js';
import { renderGame, renderWinner } from './utils/render.js';
import { isValidateCarNames, isValidateRacingCount } from './utils/validation.js';

class RacingGame {
  constructor() {
    this.racingCars = [];
    this.racingCount = 0;
  }

  setRacingCars(carNamesInput) {
    this.racingCars = carNamesInput.split(',').map((carName) => new Car(carName));
  }

  setRacingCount(racingCount) {
    this.racingCount = parseInt(racingCount, 10);
  }

  init() {
    initScreen();
    this.preventFormSubmitEvent();
    this.triggerCarNamesSubmitEvent();
    this.triggerRacingCountSubmitEvent();
  }

  //이 쪽 리팩토링 마무리
  tryMove() {
    this.racingCars.forEach((car) => car.move());
  }

  runGame() {
    for (let i = 0; i < this.racingCount; i++) {
      this.tryMove();
      renderGame(this.racingCars);
    }
    renderWinner(this.getWinner());
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
    $('#car-names-form').addEventListener('submit', (e) => e.preventDefault());
    $('#racing-count-form').addEventListener('submit', (e) => e.preventDefault());
  }

  triggerCarNamesSubmitEvent() {
    $('#car-names-submit').addEventListener('click', () => {
      const carNamesInput = $('#car-names-input').value;

      if (isValidateCarNames(carNamesInput)) {
        this.setRacingCars(carNamesInput);
        showRacingCountScreen();
      }
    });
  }

  triggerRacingCountSubmitEvent() {
    $('#racing-count-submit').addEventListener('click', () => {
      const racingCountInput = $('#racing-count-input').value;

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
