import Car from './model/Car.js';
import { $, initScreen, showRacingCountScreen, showRacingResultScreen } from './utils/dom.js';
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

  tryMove() {
    this.racingCars.forEach((car) => car.move());
  }

  runGame() {
    for (let i = 0; i < this.racingCount; i++) {
      this.tryMove();
      this.render();
    }
    this.renderWinnerText(this.getWinner());
  }

  getWinner() {
    const maxDistance = Math.max(...this.racingCars.map((car) => car.getDistance()));

    return this.racingCars.reduce((acc, car) => {
      if (car.getDistance() === maxDistance) {
        acc.push(car.getName());
      }

      return acc;
    }, []);
  }

  renderWinnerText(winnerList) {
    const winner = winnerList.join(', ');
    const winnerText = `최종 우승자: <span id="racing-winners">${winner}</span>`;

    $('#racing-result-heading').insertAdjacentHTML('beforeend', winnerText);
  }

  render() {
    const racingResultText =
      this.racingCars
        .map((car) => `<div>${car.getName()}: ${'-'.repeat(car.getDistance())}</div>`)
        .join('') + '<br/>';
    $('#racing-result-heading').insertAdjacentHTML('beforeend', racingResultText);
  }

  // 이벤트 함수
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
