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

  carNameValidator() {
    for (let i = 0; i < this.carNames.length; i += 1) {
      const carName = this.carNames[i].replace(' ', '');
      if (carName.length > 5) {
        this.isCarNamesValid = false;
        return;
      }
    }
    this.isCarNamesValid = true;
  }

  carNameSeparator() {
    this.carNames = this.carNamesForm.value.split(',');
    console.log(this.carNames);
  }

  onCarNamesSubmitBtnClick = () => {
    this.carNameSeparator();
    this.carNameValidator();
    this.carNamesForm.clearInput();
  };
}

new RacingCarGame();
