import {
  $racingCountTitle,
  $racingCountInput,
  $racingCountSubmit,
  $resultTitle,
  $carNamesInput,
  $carNamesSubmit,
} from './constants/HTMLconstant.js';
import validCarName from './validCarName.js';
import showRacingInput from './showRacingInput.js';
import Car from './car.js';
import validRacingCount from './validRacingCount.js';

class Game {
  constructor() {
    this.cars = [];
    this.winner = [];
  }

  initialize() {
    $racingCountTitle.style.display = 'none';
    $racingCountInput.style.display = 'none';
    $racingCountSubmit.style.display = 'none';
    $resultTitle.style.display = 'none';
    this.getCarNames();
  }

  getCarNames() {
    $carNamesSubmit.addEventListener('click', e => {
      e.preventDefault();
      const carNamesInput = $carNamesInput.value;
      const carNames = validCarName(carNamesInput);
      if (carNames) {
        carNames.forEach(carName => {
          this.cars.push(new Car(carName));
        });
        showRacingInput();
        this.getRacingInput();
      }
    });
  }

  getRacingInput() {
    $racingCountSubmit.addEventListener('click', e => {
      e.preventDefault();
      const racingCount = $racingCountInput.value;
      const racingCountNumber = validRacingCount(racingCount);
      if (racingCountNumber) {
      }
    });
  }
}

const racingGame = new Game();
racingGame.initialize();
