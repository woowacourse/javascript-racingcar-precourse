import UserInput from './userInput.js';
import Car from './car.js';
import View from './view.js';

export default class CarRacingGame {
  constructor() {
    this.userInputObject = new UserInput();
    this.carObjects = [];
    this.racingViewSpanEl = document.createElement('span');
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
        this.userInputObject.isValidCarNames() &&
        this.userInputObject.isValidRacingCount()
      ) {
        this.racingPlay();
      }
    });
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
        this.racingViewSpanEl.innerHTML += View.createRacingView(carObject);
      });
      this.racingViewSpanEl.innerHTML += '<br/>';
      racingCount += 1;
    }
    document.querySelector('#app').appendChild(this.racingViewSpanEl);
  }
}

new CarRacingGame();
