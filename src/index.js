import handleInput from './handleInput.js';

export default class RacingCarGame {
  constructor() {
    this.addElementId();
    this.selectDOM();
    this.addEventListener();
    this.IS_VALID = 1;
    this.IS_NOT_VALID = 0;
  }

  addElementId() {
    document.querySelector("input[type=text]").setAttribute('id', 'car-names-input');
    document.querySelectorAll("button")[0].setAttribute('id', 'car-names-submit');
    document.querySelector("input[type=number]").setAttribute('id', 'racing-count-input');
    document.querySelectorAll("button")[1].setAttribute('id', 'racing-count-submit');
  }

  selectDOM() {
    this.$nameInput = document.getElementById('car-names-input');
    this.$nameButton = document.getElementById('car-names-submit');
    this.$countInput = document.getElementById('racing-count-input');
    this.$countButton = document.getElementById('racing-count-submit');
  }

  addEventListener() {
    this.$nameInput.focus();
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

    if (InputUtils.checkNameValidity(this.$carNameArray) === this.IS_VALID) {
      this.createNewCar(this.$carNameArray);
      this.$countInput.focus();
      return 0;
    }

    this.$nameInput.focus();
  }

  createNewCar() {

  }

  
}

new RacingCarGame();
