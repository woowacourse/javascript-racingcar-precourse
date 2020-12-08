import inputUtils from './inputUtils.js';
import Car from './car.js';
import playUtils from './playUtils.js';

export default class RacingCarGame {
  constructor() {
    document.body.style.fontFamily = 'Arial';
    this.IS_VALID = 1;
    this.IS_NOT_VALID = 0;
    this.addElementId();
    this.selectDOM();
    this.createDisplayArea();
    this.addEventListener();
    this._privateInputUtils = new inputUtils();
    this._privatePlayUtils = new playUtils();
  }

  addElementId() {
    document.querySelector('input[type=text]').setAttribute('id', 'car-names-input');
    document.querySelectorAll('button')[0].setAttribute('id', 'car-names-submit');
    document.querySelector('input[type=number]').setAttribute('id', 'racing-count-input');
    document.querySelectorAll('button')[1].setAttribute('id', 'racing-count-submit');
    document.querySelector('div:nth-child(4)').setAttribute('id', 'resultArea');
  }

  selectDOM() {
    this._nameInput = document.getElementById('car-names-input');
    this._nameButton = document.getElementById('car-names-submit');
    this._countInput = document.getElementById('racing-count-input');
    this._countButton = document.getElementById('racing-count-submit');
    this._resultArea = document.getElementById('resultArea');
  }

  createDisplayArea() {
    this._displayArea = document.createElement('div');
    this._displayArea.setAttribute('id', 'displayArea');
    this._resultArea.appendChild(this._displayArea);
  }

  addEventListener() {
    this._nameInput.focus();

    this._nameButton.addEventListener('click', () => this.getCarNames());
    this._nameInput.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.getCarNames();
      }
    });

    this._countButton.addEventListener('click', () => this.getCount());
    this._countInput.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.getCount();
      }
    });
  }

  getCarNames() {
    this.initGame();
    this._carNameArray = this._privateInputUtils.splitWithComma(this._nameInput.value);

    if (this._privateInputUtils.checkNameValidity(this._carNameArray) === this.IS_VALID) {
      this._countInput.focus();

      return 0;
    }

    this._nameInput.focus();
  }

  getCount() {
    this.initResult();
    this._countInput.focus();
    if (this._privateInputUtils.checkCountValidity(this._countInput.value) === this.IS_VALID) {
      this.createNewCar();

      return 0;
    }

    this._countInput.value = '';
  }

  createNewCar() {
    this._cars = [];
    this._carNameArray.forEach(element => {
      this._cars.push(new Car(element, 0));
    });
    this.startRace();
  }

  startRace() {
    for (let i = 0; i < this._countInput.value; i++) {
      this.playRound();
    }

    this._privatePlayUtils.displayWinner(this._cars);
  }

  playRound() {
    this._cars.forEach(car => {
      const number = this._privatePlayUtils.getRandomNumber();
      if (number >= 4) {
        car.location += 1;
      }
    });
    this._privatePlayUtils.displayGameProcess(this._cars);
  }

  initGame() {
    this._countInput.value = '';
    this.initResult();
  }

  initResult() { 
    this._displayArea.innerText = '';
  }
}

new RacingCarGame();