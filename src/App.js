import Car from './class/Car.js';
import Render from './class/Render.js';
import CarNameFrom from './component/CarNameForm.js';
import RacingCountForm from './component/RacingCountForm.js';

export default class App {
  constructor() {
    this.cars = [];
    this.racingCount = null;
    this.carNameForm = new CarNameFrom();
    this.racingCountForm = new RacingCountForm();
    this.render = new Render();
  }

  init() {
    this.addEvent();
  }

  addEvent() {
    this.carNameForm.addSubmitClickEventHandler(this.carNamesSubmitClickEventHandler.bind(this));
    this.racingCountForm.addSubmitClickEventHandler(this.racingCountSubmitClickEventHandler.bind(this));
  }

  carNamesSubmitClickEventHandler(e) {
    e.preventDefault();

    const carNames = this.carNameForm.processInputValue();
    const isValid = this.carNameForm.checkValidInputValue(carNames);

    if (isValid) {
      this.generateCar(carNames);
    }
  }

  generateCar(carNames) {
    this.cars = carNames.map((name) => {
      return new Car(name);
    });
  }

  racingCountSubmitClickEventHandler(e) {
    e.preventDefault();

    this.render.initializeResult();
    const racingCount = this.racingCountForm.getInputValue();
    const isValid = this.racingCountForm.checkValidInputValue(this.cars, racingCount);

    if (isValid) {
      this.racingCount = Number(racingCount);
      this.startGame();
    }
  }

  startGame() {
    for (let i = 0; i < this.racingCount; i++) {
      this.race();
    }

    const winenrList = this.findRacingWinner();
    this.render.renderRacingWinner(winenrList);
    this.render.displayResult();
    this.initializeCars();
  }

  race() {
    this.cars.forEach((car) => {
      car.move();
      this.render.renderMoveResult(car);
    });

    this.render.renderNewLine();
  }

  findRacingWinner() {
    let currentHighNumMove = 0;
    let currentWinners = []

    this.cars.forEach((car)=>{
      if (car.getNumMove() > currentHighNumMove) {
        currentHighNumMove = car.getNumMove();
        currentWinners = [car.getName()];
      } else if (car.getNumMove() == currentHighNumMove) {
        currentWinners.push(car.getName());
      }
    });

    return currentWinners;
  }

  initializeCars() {
    this.cars = [];
  }
}
