import inputUtils from './inputUtils.js';
import Car from './car.js';
import playUtils from './playUtils.js';

export default class RacingCarGame {
  constructor() {
    document.body.style.fontFamily = 'Arial';
    this.IS_VALID = 1;
    this.IS_NOT_VALID = 0;
    this._privateInputUtils = new inputUtils();
    this._privatePlayUtils = new playUtils();
    this.addEventListener();
    this.addElementId();
    this.selectDOM();
  }

  addElementId() {
    document.querySelector("input[type=text]").setAttribute('id', 'car-names-input');
    document.querySelectorAll("button")[0].setAttribute('id', 'car-names-submit');
    document.querySelector("input[type=number]").setAttribute('id', 'racing-count-input');
    document.querySelectorAll("button")[1].setAttribute('id', 'racing-count-submit');
    document.querySelector("div:nth-child(4)").setAttribute('id', 'resultArea');
  }

  selectDOM() {
    this.nameInput = document.getElementById('car-names-input');
    this.nameButton = document.getElementById('car-names-submit');
    this.countInput = document.getElementById('racing-count-input');
    this.countButton = document.getElementById('racing-count-submit');
    this.resultArea = document.getElementById('resultArea');
  }

  addEventListener() {
    this.nameInput.focus();

    this.nameButton.addEventListener("click", () => this.getCarNames());
    this.nameInput.addEventListener("keypress", (e) => {
      if (e.keyCode === 13)
        this.getCarNames();
    });

    this.countButton.addEventListener('click', () => this.getCount());
    this.countInput.addEventListener('keypress', (e) => {
      if (e.keyCode === 13)
        this.getCount();
    });
  }

  getCarNames() {
    this.initGame();
    this.carNameArray = this._privateInputUtils.splitWithComma(this.nameInput.value);

    if (this._privateInputUtils.checkNameValidity(this.carNameArray) === this.IS_VALID) {
      this.countInput.focus();
      return 0;
    }

    this.nameInput.focus();
  }

  getCount() {
    this.initResult();
    this.countInput.focus();
    if (this._privateInputUtils.checkCountValidity(this.countInput.value) === this.IS_VALID) {
      this.createNewCar();
      return 0;
    }

    this.countInput.value = '';
  }

  createNewCar() {
    this.cars = [];
    this.carNameArray.forEach((element) => {
      this.cars.push(new Car(element, 0));
    });
    this.startRace();
  }

  startRace() {
    for (let i = 0; i < this.countInput.value; i++)
      this.playRound();

      this._privatePlayUtils.displayWinner(this.cars);
  }

  playRound() {
    this.cars.forEach((car) => {
      const number = this._privatePlayUtils.getRandomNumber();
      if (number >= 4)
        car.location += 1;
    })
    this._privatePlayUtils.displayGameProcess(this.cars);
  }

  initGame() {
    this.countInput.value = '';
    this.initResult();
  }

  initResult = () => { this.resultArea.innerText = '' }
}

new RacingCarGame();