import Car from './Car.js';
import FormHandler from './FormHandler.js';
import domId from './share.js';

export default class RacingCarGame {
  constructor() {
    this.carNamesForm = new FormHandler(
      domId.carNamesInput,
      domId.carNamesSubmitBtn,
    );
    this.racingCountForm = new FormHandler(
      domId.racingCountInput,
      domId.racingCountSubmitBtn,
    );

    this.isCarNamesValid = false;

    this.gameInit();
  }

  gameInit() {
    this.carNamesForm.setOnClick(this.onCarNamesSubmitBtnClick);
  }

  onCarNamesSubmitBtnClick = () => {
    this.carNameSeparator();
    this.carNameValidator();
    this.carNamesForm.clearInput();
    if (this.isCarNamesValid) {
      this.createCars();
    }
  };

  carNameSeparator() {
    this.carNames = this.carNamesForm.value
      .split(',')
      .map((carName) => carName.replace(' ', ''));
  }

  carNameValidator() {
    this.isCarNamesValid = this.checkLength() && this.checkOverlap();
  }

  checkLength() {
    for (let i = 0; i < this.carNames.length; i += 1) {
      const carName = this.carNames[i];
      if (carName.length > 5) {
        return false;
      }
    }
    return true;
  }

  checkOverlap() {
    const carNamesSet = new Set(this.carNames);
    return carNamesSet.size === this.carNames.length;
  }

  createCars() {
    this.cars = [];
    this.carNames.forEach((carName) => {
      this.cars.push(new Car(carName));
    });
  }
}

new RacingCarGame();
