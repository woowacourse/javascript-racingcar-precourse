import Car from './car.js';
import UserInput from './userInput.js';
import View from './view.js';
import { ELEMENT_ID, ERR_MESSAGE, WINNER_COMMENT } from './constants.js';

export default class CarRacingGame {
  constructor() {
    this.appEl = document.querySelector('#app');
    this.userInputObject = new UserInput();
    this.carObjects = [];
    this.racingStatusSpanEl = this.createSpanElement(ELEMENT_ID.racingStatusId);
    this.racingWinnerCommentEl = this.createSpanElement(
      ELEMENT_ID.racingWinnerCommentId,
    );
    this.racingWinnerNameSpanEl = this.createSpanElement(
      ELEMENT_ID.racingWinnerNameId,
    );
    this.bindEventListener();
  }

  createSpanElement(ElementId) {
    const spanEl = document.createElement('span');
    spanEl.id = ElementId;
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
        !this.isChangeCarName() &&
        this.userInputObject.isValidRacingCount()
      ) {
        this.removeRacingView();
        this.racingPlay();
        this.racingResult();
        this.removeCarForward();
      }
    });
  }

  isChangeCarName() {
    const inputCarNameArray = this.userInputObject.getCarNameArray();
    let result = false;
    if (inputCarNameArray.length !== this.carObjects.length) {
      result = true;
    }
    this.carObjects.forEach((carObject, idx) => {
      if (carObject.getCarName() !== inputCarNameArray[idx]) {
        result = true;
      }
    });
    if (result) {
      alert(ERR_MESSAGE.clickCarNameSubmitButton);
    }

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
