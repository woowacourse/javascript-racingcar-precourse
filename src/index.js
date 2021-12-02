import {
  $racingCountTitle,
  $racingCountInput,
  $racingCountSubmit,
  $resultTitle,
  $carNamesInput,
  $carNamesSubmit,
} from './constants/HTMLconstant.js';
import validCarName from './validCarName.js';
import Car from './car.js';

class Game {
  constructor() {
    this.cars = [];
    this.winner = '';
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
      }
    });
  }
}

const racingGame = new Game();
racingGame.initialize();
