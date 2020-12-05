import handleInput from './handleInput.js';
import Car from './car.js';

export default class RacingCarGame {
  constructor() {
    this.addElementId();
    this.selectDOM();
    this.addEventListener();
    this.IS_VALID = 1;
    this.IS_NOT_VALID = 0;
    this.$InputUtils = new handleInput();
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
    this.$countButton.addEventListener('click', () => this.getCount());
    this.$countInput.addEventListener('keypress', (e) => {
      if (e.keyCode === 13)
        this.getCount();
    })
  }

  getCarNames() {
    this.$carNameArray = this.$InputUtils.splitWithComma(this.$nameInput.value);

    if (this.$InputUtils.checkNameValidity(this.$carNameArray) === this.IS_VALID) {
      this.$countInput.focus();
      console.log(this.$carNameArray);
      return 0;
    }

    this.$nameInput.value = '';
    this.$nameInput.focus();
  }

  getCount() {
    if (this.$InputUtils.checkCountValidity(this.$countInput.value) === this.IS_VALID) {
      this.createNewCar();
      console.log(this.$countInput.value);
      return 0;
    }

    this.$countInput.value = '';
    this.$countInput.focus();
  }

  createNewCar() {
    let cars = [];
    this.$carNameArray.forEach((element) => {
      cars.push(new Car(element, 0));
    });
  }

}

new RacingCarGame();
