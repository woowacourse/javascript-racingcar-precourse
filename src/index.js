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

    this.isValidCarNames = false;
  }

  gameInit() {
    this.carNamesForm.setOnClick(this.onCarNamesSubmitBtnClick);
    this.racingCountForm.setOnClick(this.onRacingCountSubmitBtnClick);
  }

  onCarNamesSubmitBtnClick = () => {
    this.carNameSeparator();
    this.carNameValidator();
    if (this.isValidCarNames) {
      this.createCars();
    }
  };

  onRacingCountSubmitBtnClick = () => {
    this.checkValidCount();
    if (this.isValidCount) {
      this.play();
    }
  };

  checkValidCount = () => {
    this.count = Number(this.racingCountForm.value);
    this.isValidCount = this.count > 0;
  };

  carNameSeparator() {
    this.carNames = this.carNamesForm.value
      .split(',')
      .map((carName) => carName.replace(' ', ''));
  }

  carNameValidator() {
    this.isValidCarNames = this.checkLength() && this.checkOverlap();
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

  randomNumberGenerator() {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
  }

  checkGoStop(targetCar) {
    const number = this.randomNumberGenerator();
    if (number > 3) {
      targetCar.go();
    }
  }

  play() {
    for (let i = 0; i < this.count; i += 1) {
      this.cars.forEach((car) => {
        this.checkGoStop(car);
      });
    }
  }
}

const game = new RacingCarGame();
game.gameInit();
