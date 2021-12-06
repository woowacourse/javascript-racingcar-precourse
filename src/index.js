import Car from './car.js';
import UserInput from './userInput.js';
import View from './view.js';
import { ELEMENT_ID, ERR_MESSAGE, WINNER_COMMENT } from './constant.js';

export default class CarRacingGame {
  constructor() {
    this.appEl = document.querySelector('#app');
    this.userInputObject = new UserInput();
    this.carObjects = [];
    this.racingStatusSpanEl = this.createSpanElement();
    this.racingWinnerCommentEl = this.createSpanElement();
    this.racingWinnerNameSpanEl = this.createSpanElement();
    this.racingWinnerNameSpanEl.id = ELEMENT_ID.racingResultId;
    this.bindEventListener();
  }

  createSpanElement() {
    const spanEl = document.createElement('span');
    this.appEl.appendChild(spanEl);
    return spanEl;
  }

  bindEventListener() {
    this.bindCarNameSubmitEl();
    this.bindRacingCountSubmitEl();
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
        this.isClickCarNameSubmitButton() &&
        this.userInputObject.isValidRacingCount()
      ) {
        this.removeRacingView();
        this.racingPlay();
        this.racingResult();
        this.removeCarForward();
      }
    });
  }

  isClickCarNameSubmitButton() {
    if (this.carObjects.length === 0 || this.isChangeCarName()) {
      alert(ERR_MESSAGE.clickCarNameSubmitButton);
      return false;
    }

    return true;
  }

  isChangeCarName() {
    let result = false;
    const inputCarNameArray = this.userInputObject.getCarNameArray();
    this.carObjects.forEach((carObject, idx) => {
      if (carObject.getCarName() !== inputCarNameArray[idx]) {
        result = true;
      }
    });

    return result;
  }

  removeRacingView() {
    this.racingStatusSpanEl.innerHTML = '';
    this.racingWinnerCommentEl.innerHTML = '';
    this.racingWinnerNameSpanEl.innerHTML = '';
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
  }

  racingResult() {
    this.racingWinnerCommentEl.innerHTML = WINNER_COMMENT;
    this.racingWinnerNameSpanEl.innerHTML = View.getWinnerCarNames(
      this.carObjects,
    );
  }

  removeCarForward() {
    this.carObjects.forEach((carObject) => carObject.resetForward());
  }
}

new CarRacingGame();
