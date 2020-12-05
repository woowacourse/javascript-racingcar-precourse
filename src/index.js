import handleInput from './handleInput.js';

export default class RacingCarGame {
  constructor() {
    this.selectDOM();
    this.addEventListener();
    this.IS_VALID = 1;
    this.IS_NOT_VALID = 0;
  }

  selectDOM() {
    this.$nameInput = document.querySelector("input[type=text]");
    this.$nameButton = document.querySelectorAll("button")[0];
    this.$numberInput = document.querySelector("input[type=number]");
    this.$numberButton = document.querySelectorAll("button")[1];
  }

  addEventListener() {
    this.$nameButton.addEventListener("click", () => this.getCarNames());
    this.$nameInput.addEventListener("keypress", (e) => {
      if (e.keyCode === 13)
        this.getCarNames();
    });
  }

  getCarNames() {
    const InputUtils = new handleInput();

    this.$carNameArray = InputUtils.splitWithComma(this.$nameInput.value);
    console.log(this.$carNameArray);

    if (InputUtils.checkNameValidity(this.$carNameArray) === this.IS_VALID)
      this.createNewCar(this.$carNameArray);
  }

  createNewCar() {

  }

  
}

new RacingCarGame();
