import Car from './Car.js';
import CarNamesForm from './CarNamesForm.js';
import RacingCountForm from './RacingCountForm .js';
import { domId, MSG } from './share.js';

export default class RacingCarGame {
  constructor() {
    this.carNamesForm = new CarNamesForm(this.onCarNamesSubmitBtnClick);
    this.racingCountForm = new RacingCountForm(this.onRacingCountSubmitBtnClick);

    this.racingCountContainer = document.querySelector(domId.racingCountContainer);
    this.resultSection = document.querySelector(domId.resultSection);
  }

  gameInit() {
    this.cars = [];
    this.count = 0;
  }

  onCarNamesSubmitBtnClick = () => {
    this.isValidCarNames = this.carNamesForm.checkValidName();
    if (this.isValidCarNames) {
      this.createCars();
      this.showElement(this.racingCountContainer);
    } else {
      this.showAlert(MSG.INVALID_NAME_INPUT_MSG);
      this.carNamesForm.clearInput();
    }
  };

  onRacingCountSubmitBtnClick = () => {
    this.isValidCount = this.racingCountForm.checkValidCount();
    this.count = this.racingCountForm.count;
    if (this.isValidCount) {
      this.play();
      this.getWinner();
      const winnerTemplate = this.winnerTemplateMaker();
      this.appendResult(winnerTemplate);
      this.showElement(this.resultSection);
    } else {
      this.showAlert(MSG.INVALID_RACING_COUNT_MSG);
      this.racingCountForm.clearInput();
    }
  };

  createCars() {
    this.cars = [];
    this.carNames = this.carNamesForm.carNames;
    this.carNames.forEach((carName) => {
      this.cars.push(new Car(carName));
    });
  }

  play() {
    for (let i = 0; i < this.count; i += 1) {
      this.cars.forEach((car) => {
        car.updatePosition();
      });
      const resultTemplate = this.resultTemplateMaker();
      this.appendResult(resultTemplate);
    }
  }

  getWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const candidates = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.carName);
    this.winner = candidates.join(',');
  }

  showAlert(msg) {
    alert(msg);
  }

  resultTemplateMaker() {
    const template = this.cars.map((car) => `<p>${car.carName} : ${'-'.repeat(car.position)}</p>`).join('');
    return template;
  }

  winnerTemplateMaker() {
    const template = `<p>최종우승자 : ${this.winner}</p>`;
    return template;
  }

  appendResult(template) {
    this.resultSection.innerHTML += template;
  }

  showElement(elem) {
    elem.style.visibility = 'visible';
  }
}

const game = new RacingCarGame();
game.gameInit();
