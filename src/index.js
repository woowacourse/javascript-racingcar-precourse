import handleInput from './handleInput.js';

export default class RacingCarGame {
  constructor() {
    this.selectDOM();
    this.addEventListener();
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
      if (e.keyCode === 13) this.getCarNames();
    });
  }

  getCarNames() {
    const userNameInput = this.$nameInput.value;
    this.$carNames = userNameInput.split(",");
    console.log(this.$carNames);

    const InputUtils = new handleInput();
    InputUtils.checkNameValidity(this.$carNames);
  }

  
}

new RacingCarGame();
