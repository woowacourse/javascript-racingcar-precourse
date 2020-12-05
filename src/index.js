import Car from './car.js';
import { DOMs, DOMCtrl } from './doms.js';

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.racingCount = 0;

    this.setEventListeners();
    DOMCtrl.hideUIs();
    DOMCtrl.resetCarNameInput();
  }

  setEventListeners() {
    this.handleCarNameInput = this.handleCarNameInput.bind(this);
    DOMs.carNameBtn.addEventListener('click', this.handleCarNameInput);
    DOMs.carNameInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.handleCarNameInput();
      }
    });
    this.handleRacingCountInput = this.handleRacingCountInput.bind(this);
    DOMs.racingCountBtn.addEventListener('click', this.handleRacingCountInput);
    DOMs.racingCountInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.handleRacingCountInput();
      }
    });
  }

  /*
   * tests whether the input value is proper.
   * if it is, then create Car objects and show UIs about racing count.
   */
  handleCarNameInput() {
    const carNameInputValue = DOMs.carNameInput.value;
    if (this.isEmptyString(carNameInputValue)) {
      alert('값을 입력해주세요.');
      DOMCtrl.resetCarNameInput();
      return;
    }
    const carNames = this.getCarNamesArray(carNameInputValue);
    for (let i = 0; i < carNames.length; i++) {
      if (this.isNotProperCarName(carNames[i])) {
        DOMCtrl.resetCarNameInput();
        return;
      }
    }
    this.setCarObjects(carNames);
    DOMCtrl.showRacingCountUI();
  }

  isEmptyString(inputValue) {
    return !inputValue;
  }

  getCarNamesArray(inputValue) {
    return inputValue.split(',').map(name => name.trim());
  }

  // if car name is empty string or longer than 5, it's not proper.
  isNotProperCarName(carName) {
    let result = false;
    if (this.isLongerThanFive(carName)) {
      alert('5자가 넘는 이름이 존재합니다.');
      result = true;
    } else if (this.isEmptyString(carName)) {
      alert('이름 중에 빈 문자열이 존재합니다.');
      result = true;
    }

    return result;
  }

  isLongerThanFive(carName) {
    return carName.length > 5;
  }

  // create Car objects with car names.
  setCarObjects(carNames) {
    const newCars = [];
    carNames.forEach(carName => {
      newCars.push(new Car(carName));
    });
    this.cars = newCars;
  }

  /*
   * tests whether racing count input is proper.
   * if it is, then start a new race and print the result on the page.
   */
  handleRacingCountInput() {
    const racingCountInputValue = DOMs.racingCountInput.value;
    if (this.isNotProperRacingCountInputValue(racingCountInputValue)) {
      DOMCtrl.resetRacingCountInput();
      return;
    }
    this.racingCount = racingCountInputValue;
    this.resetPrevRace();
    DOMCtrl.showResultUI();
    this.startRace();
    this.printWinnersName();
  }

  // if racing count input is an empty string or not a number, it's not proper.
  isNotProperRacingCountInputValue(inputValue) {
    let result = false;
    if (this.isEmptyString(inputValue) || isNaN(inputValue)) {
      alert('숫자를 입력해주세요.');
      result = true;
    }

    return result;
  }

  resetPrevRace() {
    this.cars.forEach(car => {
      car.resetRaceResult();
    });
    DOMs.resultBoard.textContent = '';
  }

  startRace() {
    for (let i = 0; i < this.racingCount; i++) {
      this.printTrialResult(this.cars);
    }
  }

  printTrialResult(cars) {
    const trialResult = document.createElement('p');
    let resultContent = '';
    cars.forEach(car => {
      car.getTrialResult();
      resultContent += `${car.carName}: ${car.raceResult}<br>`;
    });
    trialResult.innerHTML = resultContent;
    DOMs.resultBoard.appendChild(trialResult);
  }

  printWinnersName() {
    const winnersName = document.createElement('p');
    const winners = this.getWinnerName();
    winnersName.textContent = `최종 우승자: ${winners.join(', ')}`;
    DOMs.resultBoard.appendChild(winnersName);
  }

  // compare the results and select a winner(or winners).
  getWinnerName() {
    let winnerLength = 0;
    return this.cars.reduce((winners, car) => {
      const carResultLength = car.raceResult.length;
      let newWinners = winners;
      if (carResultLength === winnerLength) {
        newWinners = winners.concat(car.carName);
      } else if (carResultLength > winnerLength) {
        winnerLength = carResultLength;
        newWinners = [car.carName];
      }
      return newWinners;
    }, []);
  }
}

new RacingCarGame();
