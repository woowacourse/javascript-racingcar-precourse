import Car from './car.js';
import Scanner from './scanner.js';
import Printer from './printer.js';

export default class RacingCarGame {
  constructor(carList = [], racingCount = 0) {
    this.carList = carList;
    this.racingCount = racingCount;
    this.handlingElems = {};
  }

  initCars(carNamesList) {
    this.carList = carNamesList.map(name => new Car(name));
  }

  clearCarPositions() {
    this.carList.forEach(car => {
      car.clearPosition();
    });
  }

  raceOneRound() {
    this.carList.forEach(car => {
      const movable = Math.floor(Math.random() * 10);
      if (movable >= 4) {
        car.move();
      }
    });
  }

  cleanPreviousRace() {
    this.clearCarPositions();
    Printer.initCarGameResultContainer(
      this.handlingElems.carGameResultContainer,
    );
  }

  handleCarNamesSubmitBtn() {
    try {
      const { racingCountContainer, racingNamesInput } = this.handlingElems;
      const carNamesList = Scanner.getCarNamesInputToList(racingNamesInput);
      this.cleanPreviousRace();
      this.initCars(carNamesList);
      RacingCarGame.setElemVisible(racingCountContainer, true);
    } catch (err) {
      err.alertUser();
    }
  }

  handleCountSubmitBtn() {
    try {
      const { carGameResultContainer, racingCountInput } = this.handlingElems;
      this.racingCount = Scanner.getRacingCountFromUser(racingCountInput);
      this.cleanPreviousRace();
      while (this.racingCount--) {
        this.raceOneRound();
        Printer.printOneRoundResult(carGameResultContainer, this.carList);
      }
      Printer.printWinner(carGameResultContainer, this.carList);
      RacingCarGame.setElemVisible(carGameResultContainer, true);
    } catch (err) {
      err.alertUser();
    }
  }

  setHandlingElements(elemObj = {}) {
    this.handlingElems = elemObj;
    this.initEventListener();
  }

  initEventListener() {
    this.handlingElems.carNamesSubmitBtn.addEventListener('click', () =>
      this.handleCarNamesSubmitBtn(),
    );
    this.handlingElems.racingCountSubmitbtn.addEventListener('click', () =>
      this.handleCountSubmitBtn(),
    );
  }

  static setElemVisible(elem, visible) {
    if (visible) {
      elem.classList.replace('hide', 'visible');
    } else {
      elem.classList.replace('visible', 'hide');
    }
  }
}
