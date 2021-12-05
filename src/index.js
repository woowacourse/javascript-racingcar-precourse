import Car from './car.js';
import UserInput from './userInput.js';
import View from './view.js';
import { ELEMENT_ID, ERR_MESSAGE } from './constant.js';

export default class CarRacingGame {
  constructor() {
    this.appEl = document.querySelector('#app');
    this.userInputObject = new UserInput();
    this.carObjects = [];
    this.racingStatusSpanEl = document.createElement('span');
    this.racingWinnerSpanEl = document.createElement('span');
    this.racingWinnerSpanEl.id = ELEMENT_ID.racingResultId;
    this.bindEventListener();
  }

  bindCarNameSubmitEl() {
    this.userInputObject.carNameSubmitEl.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.userInputObject.isValidCarNames()) {
        this.carObjects = this.userInputObject
          .getCarNameArray()
          .map((carName) => new Car(carName));
      }
    });
  }

  bindRacingCountSubmitEl() {
    this.userInputObject.racingCountSubmitEl.addEventListener('click', (e) => {
      e.preventDefault();
      if (
        this.isPassCarNameSubmitButton() &&
        this.userInputObject.isValidRacingCount()
      ) {
        this.racingPlay();
        this.racingResult();
      }
    });
  }

  isPassCarNameSubmitButton() {
    if (this.carObjects.length === 0) {
      alert(ERR_MESSAGE.clickCarNameSubmitButton);
      return false;
    }

    return true;
  }

  bindEventListener() {
    this.bindCarNameSubmitEl();
    this.bindRacingCountSubmitEl();
  }

  racingPlay() {
    let racingCount = 1;
    while (racingCount <= this.userInputObject.getRacingCount()) {
      this.carObjects.forEach((carObject) => {
        carObject.goAndStop();
        this.racingStatusSpanEl.innerHTML += View.getRacingStatus(carObject);
      });
      this.racingStatusSpanEl.innerHTML += '<br/>';
      racingCount += 1;
    }
    this.appEl.appendChild(this.racingStatusSpanEl);
  }

  racingResult() {
    this.racingWinnerSpanEl.innerHTML = View.getWinnerCarNames(this.carObjects);
    this.appEl.appendChild(this.racingWinnerSpanEl);
  }
}

new CarRacingGame();
