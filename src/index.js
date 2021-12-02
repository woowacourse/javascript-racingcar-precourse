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
        $resultTitle.style.display = '';
        this.printRacingResult(racingCountNumber);
      }
    });
  }

  printRacingResult(racingCountNumber) {
    let result = '';
    for (let i = 0; i < racingCountNumber; i++) {
      for (let j = 0; j < this.cars.length; j++) {
        this.cars[j].doRacing();
        const raceResult = `<div>${this.cars[j].name}: ${this.cars[j].move}</div>`;
        result += raceResult;
      }
      result += `<br/>`;
    }
    this.setWinner();
    result += `<div>최종 우승자: <span id="racing-winners">${this.winner.join(
      ',',
    )}</span></div>`;
    $resultTitle.insertAdjacentHTML('afterend', result);
  }

  setWinner() {
    let maxMove = 0;
    this.cars.forEach(car => {
      if (car.moveCount > maxMove) maxMove = car.moveCount;
    });
    this.cars.forEach(car => {
      if (car.moveCount === maxMove) this.winner.push(car.name);
    });
  }
}

const racingGame = new Game();
racingGame.initialize();
